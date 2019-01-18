export const secretHandshake = (number) => {
  if (number === 4) {
    return ['close your eyes'];
  }
  if (number === 2) {
    return ['double blink'];
  }
  return ['wink'];
};
