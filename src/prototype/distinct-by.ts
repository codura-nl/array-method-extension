export {};

if (!Array.prototype.distinctBy) {
  Array.prototype.distinctBy = function <K, T, L>(identifier: (item: T) => K, mapper?: (item: T) => L): Array<T | L> {
    if (!mapper) {
      const map = this.reduce((store: Map<K, T>, item: T) => {
        const key = identifier(item);

        if (!store.has(key)) {
          store.set(key, item);
        }

        return store;
      }, new Map<K, T>());

      return Array.from(map.values());
    }

    const map = this.reduce((store: Map<K, L>, item: T) => {
      const key = identifier(item);

      if (!store.has(key)) {
        store.set(key, mapper(item));
      }

      return store;
    }, new Map<K, L>());

    return Array.from(map.values());
  };
}
