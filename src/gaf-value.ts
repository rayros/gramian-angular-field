export const gasf = (x: number, y: number) => {
  return x * y - Math.sqrt(1 - Math.pow(x, 2)) * Math.sqrt(1 - Math.pow(y, 2))
}

export const gadf = (x: number, y: number) => {
  return Math.sqrt(1 - Math.pow(y, 2)) * x - y * Math.sqrt(1 - Math.pow(x, 2));
}