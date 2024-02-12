export {};

if (!Array.prototype.mapBy) {
  Array.prototype.mapBy = function <K, T, L>(identifier: (item: T) => K, mapper?: (item: T) => L): Map<K, T | L> {
    if (!mapper) {
      return this.reduce((store: Map<K, T>, item: T) => {
        const key = identifier(item);

        store.set(key, item);

        return store;
      }, new Map<K, T>());
    }

    return this.reduce((store: Map<K, L>, item: T) => {
      const key = identifier(item);

      store.set(key, mapper(item));

      return store;
    }, new Map<K, L>());
  };
}
