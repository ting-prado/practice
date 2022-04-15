import analyzeArray from './analyzeArray';

test('all numbers are integers', () => {
  expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8])).toEqual({
    average: 4.5,
    min: 1,
    max: 8,
    length: 8,
  });
});

test('floating numbers', () => {
  expect(analyzeArray([9.5, 10.7, 11.12, 12.245])).toEqual({
    average: 10.9,
    min: 9.5,
    max: 12.245,
    length: 4,
  });
});

test('array with a string', () => {
  expect(analyzeArray(['9.5', 'hello', 10.7, 11.12, 12, 12.245])).toEqual({
    average: 11.1,
    min: 9.5,
    max: 12.245,
    length: 6,
  });
});

test('all values are in string type but are numbers', () => {
  expect(analyzeArray(['9.5', '10.7', '11.12', '12.245'])).toEqual({
    average: 10.9,
    min: 9.5,
    max: 12.245,
    length: 4,
  });
});
