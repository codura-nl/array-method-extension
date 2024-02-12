export * from './equals';
export * from './group-by';
export * from './map-by';
export * from './merge-by';
export * from './sum';

declare global {
  interface Array<T> {
    mapBy<K>(identifier: (item: T) => K): Map<K, T>;
    mapBy<K, L>(identifier: (item: T) => K, mapper: (item: T) => L): Map<K, L>;
    groupBy<K>(identifier: (item: T) => K): Map<K, T[]>;
    groupBy<K, L>(identifier: (item: T) => K, mapper: (item: T) => L): Map<K, L[]>;
    mergeBy<K>(identifier: (item: T) => K): T[];
    sum(initialValue: T): T;
    equals(items: T[]): boolean;
  }
}
