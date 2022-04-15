import calculator from './calculator';

test('add two numbers', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtract two numbers', () => {
  expect(calculator.subt(1, 2)).toBe(-1);
});

test('multipy two numbers', () => {
  expect(calculator.mult(1, 2)).toBe(2);
});

test('divide two numbers', () => {
  expect(calculator.div(1, 2)).toBe(0.5);
});

test('numbers divided by 0', () => {
  expect(calculator.div(1, 0)).not.toBe(expect.any(Number));
});
