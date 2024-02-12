import { Addable } from '../interface';

function isAddable(object: any): object is Addable {
  return 'add' in object;
}

if (!Array.prototype.sum) {
  Array.prototype.sum = function <T extends Addable>(initialValue: T): T {
    return this.reduce((acc: T, cur: T): T => {
      if (!cur) {
        return acc;
      } else if (!isAddable(cur)) {
        throw new Error(`Cannot sum non-addable item: ${JSON.stringify(cur)}`);
      }

      return acc.add(cur);
    }, initialValue);
  };
}
