import caesarCipher from './caesarCipher';

test('whole alphabet', () => {
  expect(caesarCipher.encode('abcdefghijklmnopqrstuvwxyz')).toEqual(
    'fghijklmnopqrstuvwxyzabcde'
  );
});

test('one word string', () => {
  expect(caesarCipher.encode('Hello')).toEqual('mjqqt');
});

test('a whole paragraph', () => {
  expect(caesarCipher.encode('I am a whole ass paragraph')).toEqual(
    'n fr f bmtqj fxx ufwflwfum'
  );
});

test('string with special characters', () => {
  expect(caesarCipher.encode('Pano naman ako? Nahulog na sayo.')).toEqual(
    'ufst sfrfs fpt? sfmzqtl sf xfdt.'
  );
});

test('string with numbers', () => {
  expect(caesarCipher.encode('P. Sherman, 42 Wallaby Way, Sydney')).toEqual(
    'u. xmjwrfs, 42 bfqqfgd bfd, xdisjd'
  );
});
