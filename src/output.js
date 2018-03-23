import {roundDecimal, mapRange} from './math';

let mi = 0;

export const output = ({results, max, index, decimals = 2}) => {
  results.map((o, i) => {
    if (i % index === 0) mi ++;
    const matchingPercent = roundDecimal(Math.abs(mapRange(o.score, 0, max, 0, 100) - 100), decimals);

    setObject(o, {
      matchIndex: mi,
      score: mapRange(o.score, 0, max, 0, 100),
      matching: `${!isNaN(matchingPercent) ? matchingPercent : 0}%`
    });
  });

  return results;
};

const setObject = (obj, keys) => {
  for (const key in keys) obj[key] = keys[key];
};

export const resetOutput = () => {
  mi = 0;
};

export default {
  output,
  resetOutput
};
