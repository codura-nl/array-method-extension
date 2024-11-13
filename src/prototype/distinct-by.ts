export {};

if (!Array.prototype.distinctBy) {
  Array.prototype.distinctBy = function <K, T, L>(identifier: (item: T) => K, mapper?: (item: T) => L): Array<T | L> {
    if (!mapper) {
      return this.reduce((store: Array<T>, item: T) => {
        const key = identifier(item);

        if (!store.some(value => key === identifier(value))) {
          store.push(item);
        }

        return store;
      }, new Array<T>());
    }

    return this.reduce((store: Array<T>, item: T) => {
      const key = identifier(item);

      if (!store.some(i => key === identifier(i))) {
        store.push(item);
      }

      return store;
    }, new Array<L>());
  };
}
