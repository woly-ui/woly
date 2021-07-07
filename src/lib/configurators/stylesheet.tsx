import React, { createRef, useEffect, useRef, useState } from 'react';
import { useForceUpdate } from 'lib/hooks/use-force-update';

import { ElementRef, Path, Style, StylesheetSubscriber, Stylesheets, ValueRef } from './types';
import { useLocalConfiguratorsState } from './context';

function getKey(path: Path) {
  return path.configurator + path.selector + path.variable;
}

function getStylesheet(ref: ElementRef) {
  if (!ref.current) return null;
  return ref.current.sheet;
}

function createRule(id: string, path: Path, value: string) {
  const { selector, variable } = path;
  const rule = `[data-scope='${id}'] ${selector} { ${variable}: ${value}; }`;
  return rule.replace(/'/g, '"');
}

function hasRule(stylesheet: CSSStyleSheet, rule: string) {
  const ruleCount = stylesheet.rules.length;
  if (ruleCount === 0) return false;

  const foundRule = stylesheet.rules[0];
  return foundRule.cssText === rule;
}

export function getInitialVariableValue(
  id: string,
  { selector, variable }: Pick<Path, 'selector' | 'variable'>,
): string | null {
  const fullSelector = `[data-scope='${id}'] ${selector}`;
  const scopeElement = document.querySelector(fullSelector);
  if (!scopeElement) return null;

  const style = getComputedStyle(scopeElement);
  const value = style.getPropertyValue(variable);
  return value.trim();
}

type Subscribers = Record<string, StylesheetSubscriber[]>;

export function useStylesheets(id: string): Stylesheets {
  const initialValue = { map: new Map<string, Style>() };
  const [{ map }, setStyles] = useState(initialValue);
  const subscribersRef = useRef<Subscribers>({});

  const subscribe: Stylesheets['subscribe'] = (path, callback) => {
    const key = getKey(path);
    const subscribers = subscribersRef.current;

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!subscribers[key]) {
      subscribers[key] = [];
    }

    subscribers[key].push(callback);

    return () => {
      subscribers[key] = subscribers[key].filter((item) => item !== callback);
    };
  };

  const callSubscribers = (key: string) => {
    const subscribers = subscribersRef.current;
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!subscribers[key]) return;
    subscribers[key].forEach((cb) => cb());
  };

  const initialize: Stylesheets['initialize'] = (path) => {
    const key = getKey(path);

    const style = map.get(key);
    if (style) return;

    const initialValue = getInitialVariableValue(id, path);
    if (!initialValue) return;

    const elementRef = createRef<HTMLStyleElement>() as ElementRef;
    const valueRef = createRef<string>() as ValueRef;
    valueRef.current = initialValue;

    map.set(key, {
      element: <style key={key} ref={elementRef} />,
      elementRef,
      initialValue,
      valueRef,
    });

    setStyles({ map });
    callSubscribers(key);
  };

  const get: Stylesheets['get'] = (path) => {
    const key = getKey(path);

    const style = map.get(key);
    if (!style) return null;

    return style;
  };

  const set: Stylesheets['set'] = (params) => {
    const key = getKey(params);

    const style = map.get(key);
    if (!style) return;

    const stylesheet = getStylesheet(style.elementRef);
    if (!stylesheet) return;

    const rule = createRule(id, params, params.value);

    if (hasRule(stylesheet, rule)) {
      return;
    }

    if (stylesheet.rules.length > 0) {
      stylesheet.deleteRule(0);
    }

    stylesheet.insertRule(rule);
    style.valueRef.current = params.value;
    callSubscribers(key);
  };

  const reset: Stylesheets['reset'] = ({ configurator }) => {
    for (const [key, style] of map.entries()) {
      const { elementRef, valueRef, initialValue } = style;
      if (!key.startsWith(configurator)) continue;
      const stylesheet = getStylesheet(elementRef);
      if (!stylesheet) continue;
      if (stylesheet.rules.length === 0) continue;
      stylesheet.deleteRule(0);
      valueRef.current = initialValue;
      callSubscribers(key);
    }
  };

  const render: Stylesheets['render'] = () => {
    return Array.from(map.values()).map((style) => style.element);
  };

  return {
    initialize,
    subscribe,
    get,
    set,
    reset,
    render,
  };
}

export function useCssVariable(path: Path) {
  const { stylesheets } = useLocalConfiguratorsState();
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    const unsubscribe = stylesheets.subscribe(path, forceUpdate);
    stylesheets.initialize(path);
    return unsubscribe;
  }, []);

  type Value = string | null;

  const style = stylesheets.get(path);
  const value: Value = style?.valueRef.current ?? null;

  const setValue = (value: Value) => {
    if (!value) return;
    stylesheets.set({ ...path, value });
  };

  return [value, setValue] as const;
}
