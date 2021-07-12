export type IfEmpty<T> = keyof T extends never
  ? {
      priority?: string;
    }
  : T;

export type Priority = IfEmpty<DefaultPriority>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DefaultPriority {}
