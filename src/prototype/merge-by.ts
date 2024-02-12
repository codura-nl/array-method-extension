import { Mergeable } from '../interface';

function isMergeable(object: any): object is Mergeable {
  return 'merge' in object;
}

if (!Array.prototype.mergeBy) {
  Array.prototype.mergeBy = function <K, T extends Mergeable>(identifier: (item: T) => K): T[] {
    return this.reduce((acc: T[], cur: T) => {
      if (!isMergeable(cur)) {
        throw new Error(`Cannot merge non-mergeable item: ${JSON.stringify(cur)}`);
      }

      const index = acc.findIndex((item: T) => identifier(cur) === identifier(item));

      if (index >= 0) {
        acc.splice(index, 1, acc[index].merge(cur));
      } else {
        acc.push(cur);
      }

      return acc;
    }, new Array<T>());
  };
}
