import { Comparable } from '../interface';

function isComparable(object: any): object is Comparable {
  return 'equals' in object;
}

if (!Array.prototype.equals) {
  Array.prototype.equals = function <T extends Comparable>(items: T[]): boolean {
    if (!items?.length) {
      return !this?.length; // If both are undefined or empty, they are equal
    }

    [...this, ...items].forEach((item: T) => {
      if (!isComparable(item)) {
        throw new Error(`Cannot compare non-comparable item: ${JSON.stringify(item)}`);
      }
    });

    return (
      this.length === items.length &&
      this.every((localItem: T) => items.some((item: T) => item.equals(localItem))) &&
      items.every(item => this.some((localItem: T) => localItem.equals(item)))
    );
  }
}
