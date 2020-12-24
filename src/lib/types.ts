export type IfEmpty<T> = keyof T extends never
  ? {
      variant?: string;
    }
  : T;

export type Variant = IfEmpty<DefaultVariant>;

export interface DefaultVariant {}
