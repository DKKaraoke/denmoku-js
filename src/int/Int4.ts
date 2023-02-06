/**
 * Signed 4 bit integer to number
 * @param value Signed 4 bit integer
 * @returns value as number
 */
export const int4ToNumber = (value: number) => {
  value &= 0x0f;
  const integer = value & 0x7;
  const negative = Boolean(value >> 3);
  return negative && integer ? -integer : integer;
};

/**
 * number to signed 4 bit integer
 * @param value number to signed 4 bit integer
 * @returns value as signed 4 bit integer
 */
export const numberToInt4 = (value: number) => {
  if (value < -7 || 7 < value) {
    throw new Error("value must be between -7 and 7.");
  }

  let result = value & 0x7;
  if (value <= 0) {
    result |= 0x04;
  }
  return result;
};
