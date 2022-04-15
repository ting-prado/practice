import reverseString from './reverseString';

test('a single word', () => {
  expect(reverseString('Hello')).toEqual('olleH');
});

test('a whole sentence', () => {
  expect(reverseString('This is a whole sentence... right?')).toEqual(
    '?thgir ...ecnetnes elohw a si sihT'
  );
});

test('a number string', () => {
  expect(reverseString('56789')).toEqual('98765');
});

test('a number type', () => {
  expect(reverseString(12345)).toEqual('54321');
});
