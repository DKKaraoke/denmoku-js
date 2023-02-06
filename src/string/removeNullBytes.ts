/**
 * Remove null bytes from string
 * @param value Value
 * @returns Null bytes removed value
 */
export const removeNullBytes = (value: string) => {
  return value.replace(/\0/g, "");
};
