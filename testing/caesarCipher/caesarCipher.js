const caesarCipher = (() => {
  const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));

  const splitString = (str) => str.toLowerCase().split('');

  const getIndex = (char) => alphabet.indexOf(char);

  const encode = (str) => {
    const strArr = splitString(str);
    const pattern = /[^a-z]+/;

    const encodedStr = strArr.map((char) => {
      if (pattern.test(char)) {
        return char;
      } else {
        let i = getIndex(char);
        return alphabet[(i + 5) % 26];
      }
    });

    return encodedStr.join('');
  };

  return { encode };
})();

export default caesarCipher;
