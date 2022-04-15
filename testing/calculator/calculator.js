const calculator = (() => {
  const add = (a, b) => a + b;
  const subt = (a, b) => a - b;
  const mult = (a, b) => a * b;
  const div = (a, b) => a / b;

  return { add, subt, mult, div };
})();

export default calculator;
