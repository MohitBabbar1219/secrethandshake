

xtest('binary 11 (decimal 3) is wink and double blink', () => {
  expect(secretHandshake(3)).toEqual(['wink', 'double blink']);
});

xtest('binary 10011 (decimal 19) is double blink and wink', () => {
  expect(secretHandshake(19)).toEqual(['double blink', 'wink']);
});

xtest('binary 11111 (decimal 31) is jump, close your eyes, double blink, and wink', () => {
  expect(secretHandshake(31)).toEqual(['jump', 'close your eyes', 'double blink', 'wink']);
});

xtest('text is an invalid secret handshake', () => {
  expect(() => secretHandshake('piggies'))
    .toThrow(new Error('Handshake must be a number'));
});
