export * from './distinct-by';
export * from './equals';
export * from './group-by';
export * from './map-by';
export * from './merge-by';
export * from './sum';

declare global {
  interface Array<T> {
    distinctBy<K>(identifier: (item: T) => K): T[];
    distinctBy<K, L>(identifier: (item: T) => K, mapper: (item: T) => L): L[];
    equals(items: T[]): boolean;
    groupBy<K, L>(identifier: (item: T) => K, mapper: (item: T) => L): Map<K, L[]>;
    groupBy<K>(identifier: (item: T) => K): Map<K, T[]>;
    mapBy<K, L>(identifier: (item: T) => K, mapper: (item: T) => L): Map<K, L>;
    mapBy<K>(identifier: (item: T) => K): Map<K, T>;
    mergeBy<K>(identifier: (item: T) => K): T[];
    sum(initialValue: T): T;
  }
}
