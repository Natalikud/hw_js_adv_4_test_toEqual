import healthSortList from '../sort_func';
import { list, expectSortList } from '../data';

test('testing healthSortList function', () => {
  const result = healthSortList(list);
  expect(result).toEqual(expectSortList);
});

/*
test.each([
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
])(
  ('testing health list with %s name and %i health'),
  (name, health) => {
    const result = healthSortList(health);
    expect(result).toEqual(expected);
  },
); */
