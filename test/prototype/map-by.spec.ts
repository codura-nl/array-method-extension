export * from '../../src/prototype';

class MappableItem {
  constructor(readonly id: string, readonly value: number) {
  }
}

describe('mapBy', () => {
  test('by id', () => {
    const mappableItems = [new MappableItem('1', 4), new MappableItem('2', 9.567)];

    expect(mappableItems.mapBy(addableItem => addableItem.id)).toEqual(new Map([
      ['1', new MappableItem('1', 4)],
      ['2', new MappableItem('2', 9.567)],
    ]));
  });
});
