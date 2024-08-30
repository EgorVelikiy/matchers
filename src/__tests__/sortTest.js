import sortChars from '../sort'

const chars = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
];
const charsSorted = [
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
];

test('sorted health', () => {
  let result = sortChars(chars);
  expect(result).toEqual(charsSorted);
});