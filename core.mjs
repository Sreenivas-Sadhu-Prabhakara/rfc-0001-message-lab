export function inspectMessage(text, destination, link, trace = false) {
  if (typeof text !== 'string') throw new TypeError('Enter text to inspect.');
  if (!Number.isInteger(destination) || destination < 0 || destination > 31) throw new RangeError('Destination must be a whole number from 0 to 31.');
  if (!Number.isInteger(link) || link < 0 || link > 255) throw new RangeError('Link field must be a whole number from 0 to 255.');
  const bytes = new TextEncoder().encode(text).length;
  return {
    bytes, bodyBits: bytes * 8, valid: bytes * 8 <= 8080,
    remainingBits: 8080 - bytes * 8,
    fields: [destination.toString(2).padStart(5, '0'), link.toString(2).padStart(8, '0'), trace ? '1' : '0', '00'],
    linkUse: link === 0 ? 'Control link' : link < 32 ? 'User link' : 'Fits the field, outside the 32 described links',
  };
}
