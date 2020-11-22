export const minMaxScale = (minimum: number, maximum: number, value: number) => {
  return (value - minimum) / (maximum - minimum);
}