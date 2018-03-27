import {calcDist} from './math';


let dists = {};
let max;

export const resetScore = () => dists = {};
const pushScore = (i, v) => dists[i].push(v);

const calculateScore = id => {
  return setmax(dists[id].reduce((a, b) => a + b, 0));
};

const setmax = score => {
  if (max < score || max === undefined) max = score;
  return score;
};

const compareKeys = (key, m, i, obj) => {
  switch (typeof i[key]) {

  case `string`:
    if (obj[key] !== i[key]) pushScore(i.id, 1 * m);
    break;

  case `number`:
    pushScore(i.id, calcDist(i[key], obj[key]) * m);
    break;

  }
};

export const calculateItemDistance = ({keys, array, obj, showOriginal}) => {
  keys.map(({key, m}) => {
    array.map(i => {
      const {id} = i;

      if (!(key in i) || !obj[key] || id === obj.id && !showOriginal) return;
      if (!dists[id]) dists[id] = [];

      compareKeys(key, m, i, obj);

    });
  });

  return dists;
};

export const calculateResults = (d, a) => {
  const results = [];

  for (const id in d) {
    const score = calculateScore(id);

    results.push({
      score,
      item: a.filter(i => i.id.toString() === id.toString())[0],
    });
  }

  return {
    results: results.sort((a, b) => a.score - b.score),
    max
  };
};


export default {
  calculateItemDistance,
  calculateResults,
  resetScore
};
