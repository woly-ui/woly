export type ConfiguratorName = 'color';
export type VariableType = 'color';

export interface Variable {
  displayName: string;
  name: string;
  type: VariableType;
}

export interface Scope {
  displayName: string;
  selector: string;
  variables: Variable[];
}

export interface Path {
  configurator: ConfiguratorName;
  selector: string;
  variable: string;
}

export type ElementRef = React.MutableRefObject<HTMLStyleElement | null>;
export type ValueRef = React.MutableRefObject<string>;

export interface Style {
  element: JSX.Element;
  elementRef: ElementRef;
  initialValue: string;
  valueRef: ValueRef;
}

export type StylesheetSubscriber = () => void;

export interface Stylesheets {
  subscribe(path: Path, callback: StylesheetSubscriber): () => void;
  initialize(params: Path): void;
  get(path: Path): Style | null;
  set(params: Path & { value: string }): void;
  reset(params: { configurator: ConfiguratorName }): void;
  render(): JSX.Element[];
}
