# Array Method Extensions

This package provides a set of useful methods to extend the functionality of the `Array` class in TypeScript.

Using these methods, you can easily group, map, distinct, merge, and sum arrays. It reduces code complexity and makes
your code more readable.

## Index
- [Installation](#installation)
- [Usage](#usage)
- [Methods](#methods)
  - [distinctBy](#distinctBy)
  - [equals](#equals)
  - [groupBy](#groupBy)
  - [mapBy](#mapBy)
  - [mergeBy](#mergeBy)
  - [sum](#sum)

## Installation

Using [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/)

```sh
yarn add @codura/array-method-extension
```

Using [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

```shell
npm install @codura/array-method-extension
```

## Usage

```ts
export * from '@codura/array-method-extension';
```

## Methods

### distinctBy

Remove duplicates from an `Array` using a **key function**

```ts
const usersWithDuplicates = [
  { id: '1', gender: 'male', name: 'John' },
  { id: '2', gender: 'female', name: 'Jane' },
  { id: '1', gender: 'male', name: 'John' },
];
const usersWithoutDuplicates = usersWithDuplicates.distinctBy(user => user.id); // [{ id: '1', gender: 'male', name: 'John' }, { id: '2', gender: 'female', name: 'Jane' }]
```

Remove duplicates from an `Array` using a **key function** and a **value function**

```ts
const usersWithDuplicates = [
  { id: '1', gender: 'male', name: 'John' },
  { id: '2', gender: 'female', name: 'Jane' },
  { id: '1', gender: 'male', name: 'John' },
];
const namesWithoutDuplicates = usersWithDuplicates.distinctBy(user => user.id, user => user.name); // ['John', 'Jane']
```

Check if two arrays, containing decimals, are equal using [decimal.js](https://www.npmjs.com/package/decimal.js)

```ts
import Decimal from 'decimal.js';

const decimals1 = [
  new Decimal(23.56457),
  new Decimal(12.34543),
  new Decimal(34.12345),
];
const decimals2 = [
  new Decimal(12.34543),
  new Decimal(23.56457),
  new Decimal(34.12345),
];
const areEqual = decimals1.equals(decimals2); // true
```

### equals

Check if two arrays, containing custom comparable objects, are equal

```ts
class ComparableItem {
  constructor(readonly item: string) {
  }

  equals(comparableItem: ComparableItem) {
    return this.item === comparableItem.item;
  }
}

const comparableItems1 = [new ComparableItem('a'), new ComparableItem('b')];
const comparableItems2 = [new ComparableItem('b'), new ComparableItem('a')];
const areEqual = comparableItems1.equals(comparableItems2); // true
```

Check if two arrays, containing decimals, are equal using [decimal.js](https://www.npmjs.com/package/decimal.js)

```ts
import Decimal from 'decimal.js';

const decimals1 = [
  new Decimal(23.56457),
  new Decimal(12.34543),
  new Decimal(34.12345),
];
const decimals2 = [
  new Decimal(12.34543),
  new Decimal(23.56457),
  new Decimal(34.12345),
];
const areEqual = decimals1.equals(decimals2); // true
```

### groupBy

Group an `Array` to a `Map` using a **key function**

```ts
const users = [
  { id: '1', gender: 'male', name: 'John' },
  { id: '2', gender: 'female', name: 'Jane' },
  { id: '3', gender: 'male', name: 'Joe' },
];
const usersByGroup = users.groupBy(user => user.gender); // Map([['male', [{id: '1', gender: 'male', name: 'John'}, {id: '3', gender: 'male', name: 'Joe'}]], ['female', [{id: '2', gender: 'female, name: 'Jane'}]]])
```

Group an `Array` to a `map` using a **key function** and a **value function**

```ts
const users = [
  { id: '1', gender: 'male', name: 'John' },
  { id: '2', gender: 'female', name: 'Jane' },
  { id: '3', gender: 'male', name: 'Joe' },
];
const userNamesById = users.groupBy(user => user.gender, user => user.name); // Map([['male', ['John', 'Joe']], ['female', ['Jane']]])
```

### mapBy

Map an `Array` to a `map` using a **key function**

```ts
const users = [
  { id: '1', name: 'John' },
  { id: '2', name: 'Jane' },
  { id: '3', name: 'Joe' },
];
const usersById = users.mapBy(user => user.id); // Map([['1', {id: '1', gender: 'male', name: 'John'}], ['2', {id: '2', gender: 'female, name: 'Jane'}], ['3', {id: '3', gender: 'male', name: 'Joe'}]])
```

Map an `Array` to a `map` using a **key function** and a **value function**

```ts
const users = [
  { id: '1', name: 'John' },
  { id: '2', name: 'Jane' },
  { id: '3', name: 'Joe' },
];
const userNamesById = users.mapBy(user => user.id, user => user.name); // Map([['1', 'John'], ['2', 'Jane'], ['3', 'Joe']])
```

### mergeBy

Merge custom mergeable objects in an `Array`

```ts
class Drink {
  constructor(readonly name: string, readonly amount: number) {
  }

  merge(drink: Drink) {
    return new Drink(this.name, this.amount + drink.amount);
  }
}

const drinks = [
  new Drink('beer', 5),
  new Drink('wine', 2),
  new Drink('beer', 3),
];
const sum = drinks.merge(drink => drink.name); // [Drink('beer', 8), Drink('wine', 2)]
```

### sum

Sum custom addable objects in an `Array`

```ts
class Payment {
  constructor(readonly note: string, readonly amount: number) {
  }

  add(payment: Payment) {
    return new Payment(this.note, this.amount + payment.amount);
  }
}

const payments = [
  new Payment('first', 100),
  new Payment('second', 200),
  new Payment('third', 300),
];
const sum = payments.sum(new Payment('sum', 0)); // Payment('sum', 600)
```

Sum decimals in an `Array` using [decimal.js](https://www.npmjs.com/package/decimal.js)

```ts
import Decimal from 'decimal.js';

const decimals = [
  new Decimal(23.56457),
  new Decimal(12.34543),
  new Decimal(34.12345),
];
const sum = payments.sum(new Decimal(0)); // Decimal(70.03345)
```
