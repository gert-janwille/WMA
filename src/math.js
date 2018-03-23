
export const relu = x => 1 / (1 + Math.pow(Math.E, - x));
export const calcDist = (x1, x2) => Math.sqrt((x1 - x2) * (x1 - x2));
export const roundDecimal = (n, d) => parseFloat(Math.round(n * 100) / 100).toFixed(d);
export const mapRange = (n, x1, y1, x2, y2) => (n - x1) * (y2 - x2) / (y1 - x1) + x2;


export default {
  relu,
  calcDist,
  roundDecimal,
  mapRange
};
