const handshakeMap = {
  1: 'wink',
  10: 'double blink',
  100: 'close your eyes',
  1000: 'jump',
};

export const secretHandshake = (number) => {
  if (!parseInt(number, 10)) {
    return 'Handshake must be a number';
  }
  let numberInBinary = parseInt(parseInt(number, 10).toString(2), 10);
  let isToBeReversed = false;
  if (numberInBinary >= 10000) {
    isToBeReversed = true;
    numberInBinary -= 10000;
  }
  const decodedHandshake = [];
  const handshakeKeys = Object.keys(handshakeMap).sort().reverse();
  for (let indexOfKeys = 0; indexOfKeys < handshakeKeys.length; indexOfKeys += 1) {
    if (numberInBinary >= handshakeKeys[indexOfKeys]) {
      const selectedKey = handshakeKeys[indexOfKeys];
      numberInBinary -= parseInt(handshakeKeys[indexOfKeys], 10);
      decodedHandshake.push(handshakeMap[selectedKey]);
    }
  }
  return isToBeReversed ? decodedHandshake : decodedHandshake.reverse();
};
