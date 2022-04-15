import capitalize from './capitalize';

test('single word', () => {
  expect(capitalize('hello')).toEqual('Hello');
});

test('sentence', () => {
  expect(capitalize('i am a beginner at programming!')).toEqual(
    'I am a beginner at programming!'
  );
});

test('first character is a number', () => {
  expect(capitalize('1 of the reasons I am great is:')).toEqual(
    '1 of the reasons I am great is:'
  );
});

test('first character is special', () => {
  expect(capitalize('!Warning alien life form')).toEqual(
    '!Warning alien life form'
  );
});

test('a number', () => {
  expect(capitalize(58)).toEqual('58');
});
