import { secretHandshake } from './SecretHandshake';

describe('Secret Handshake', () => {
  test('binary 1 (decimal 1) is a wink', () => {
    expect(secretHandshake(1)).toEqual(['wink']);
  });
  test('binary 10 (decimal 2) is a double blink', () => {
    expect(secretHandshake(2)).toEqual(['double blink']);
  });
});
