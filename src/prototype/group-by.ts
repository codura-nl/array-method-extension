export {};

if (!Array.prototype.groupBy) {
  Array.prototype.groupBy = function <K, T, L>(identifier: (item: T) => K, mapper?: (item: T) => L): Map<K, T[] | L[]> {
    if (!mapper) {
      return this.reduce((store: Map<K, T[]>, item: T) => {
        const key = identifier(item);

        if (!store.has(key)) {
          store.set(key, [item]);
        } else {
          store.get(key).push(item);
        }

        return store;
      }, new Map<K, T[]>());
    }

    return this.reduce((store: Map<K, L[]>, item: T) => {
      const key = identifier(item);

      if (!store.has(key)) {
        store.set(key, [mapper(item)]);
      } else {
        store.get(key).push(mapper(item));
      }

      return store;
    }, new Map<K, T[]>());
  };
}
