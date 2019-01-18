xtest('text is an invalid secret handshake', () => {
  expect(() => secretHandshake('piggies'))
    .toThrow(new Error('Handshake must be a number'));
});
