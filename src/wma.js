import {calculateItemDistance, calculateResults, resetScore} from './score';
import {output, resetOutput} from './output';
import {log} from './helper';

class WMA {

  constructor(obj) {
    this.showOriginal = false;
    this.decimals = 2;
    this.matchIndex = 10;
    this.verbose = 0;

    for (const key in obj) this[key] = obj[key];

    if (this.verbose) log(`[WMA] - Initialized`, null, true);
  }

  match(obj) {

    const dists = calculateItemDistance({
      obj,
      keys: this.keys,
      array: this.source,
      showOriginal: this.showOriginal
    });

    const {results, max} = calculateResults(dists, this.source);

    const oresult = output({
      max,
      results,
      matchIndex: this.matchIndex,
      decimals: this.decimals
    });


    this._resetAll();

    return oresult;
  }

  log() {
    console.log(`hello world`);
  }

  _resetAll() {
    resetScore();
    resetOutput();
  }
}

export default WMA;
