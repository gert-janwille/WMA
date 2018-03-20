import {calcDist, roundDecimal, mapRange} from './util/Math';


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

    console.log(this);
  }

  // add output=10
  match(obj) {
    this.results = [];
    this.obj = obj;
    this.keys.map(({key, m}) => this._mapSource(key, m));

    for (const id in this.dists) this.results.push(this._setObject(id));

    this.results.sort((a, b) => a.score - b.score).map((o, i) => {
      if (i % this.output === 0) this.matchIndex++;
      o[`matchIndex`] = this.matchIndex;
      o[`score`] = mapRange(o.score, this._min, this._max, 0, 100);
      o[`matching`] = `${roundDecimal(Math.abs(o.score - 100), this.decimals)}%`;
    });

    this._resetAll();
    return this.results;
  }

  _mapSource(key, m) {
    this.source.map(i => {
      if (i.id === this.obj.id && !this.showOriginal) return;
      if (!this.dists[i.id]) this.dists[i.id] = [];
      const distance = calcDist(i[key], this.obj[key]) * m;
  
      this.dists[i.id].push(isNaN(distance) ? 0 : distance);
    });
  }

  _setObject(id) {
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
