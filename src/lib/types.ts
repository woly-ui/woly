export type IfEmpty<T> = keyof T extends never
  ? {
      variant?: string;
    }
  : T;

export type Variant = IfEmpty<DefaultVariant>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DefaultVariant {}
