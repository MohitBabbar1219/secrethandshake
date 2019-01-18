import { secretHandshake } from './SecretHandshake';

describe('Secret Handshake', () => {
  test('binary 1 (decimal 1) is a wink', () => {
    expect(secretHandshake(1)).toEqual(['wink']);
  });
});
