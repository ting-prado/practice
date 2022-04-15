const reverseString = (str) => {
  let string = String(str);
  return string.split('').reverse().join('');
};

export default reverseString;
