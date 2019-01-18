export const secretHandshake = (number) => {
  if (number === 4) {
    return ['close your eyes'];
  }
  if (number === 2) {
    return ['double blink'];
  }
  if (number === 8) {
    return ['jump'];
  }
  return ['wink'];
};
