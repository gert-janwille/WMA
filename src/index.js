import {calcDist, roundDecimal, mapRange} from './util/Math';

// TODO: string matching, if typof is string return 1 * multiplier
// TODO: Code splitting

export default class WMA {

  constructor(obj) {
    this.showOriginal = false;
    this.decimals = 2;
    this.output = 10;

    for (const key in obj) this[key] = obj[key];

    this.dists = {};
    this.results = [];
    this.matchIndex = 0;
    this._min = 0;

    // console.log(this);
  }

  match(obj) {
    this.results = [];
    this.obj = obj;

    this.keys.map(({key, m}) => this._mapSource(key, m));
    for (const id in this.dists) this.results.push(this._setScoreObject(id));

    this.results.sort((a, b) => a.score - b.score).map((o, i) => {
      if (i % this.output === 0) this.matchIndex++;
      const matchingPercent = roundDecimal(Math.abs(mapRange(o.score, this._min, this._max, 0, 100) - 100), this.decimals);

      this._setObject(o, {
        matchIndex: this.matchIndex,
        score: mapRange(o.score, this._min, this._max, 0, 100),
        matching: `${!isNaN(matchingPercent) ? matchingPercent : 0}%`
      });

    });

    this._resetAll();

    return this.results;
  }

  _mapSource(key, m) {
    this.source.map(i => {
      if (!(key in i)) return;
      if (i.id === this.obj.id && !this.showOriginal) return;
      if (!this.dists[i.id]) this.dists[i.id] = [];

      this.dists[i.id].push(calcDist(i[key], this.obj[key]) * m);
    });
  }

  _setScoreObject(id) {
    const score = this._calculateScore(id);
    this._setmax(score);

    return {
      score,
      item: this.source.filter(i => i.id === id)[0],
    };
  }

  _calculateScore(id) {
    return this.dists[id].reduce((a, b) => a + b, 0);
  }

  _setmax(score) {
    if (this._max < score || this._max === undefined) this._max = score;
  }

  _setObject(obj, keys) {
    for (const key in keys) obj[key] = keys[key];
  }

  _resetAll() {
    this.dists = [];
    this.matchIndex =  0;
  }
}

module.exports = require(`./index`).default;

// result = {
//     score:8.1,
//     item:{}, //original item
//     matchIndex:2 // per 10 items een match index geven, 0= 10 beste gematchede,...
//     sortkey:"..."
// }
