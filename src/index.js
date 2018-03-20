
export default class WMA {
  constructor(obj) {
    this.status = 418;
    for (const key in obj) this[key] = obj[key];
    console.log(this);
  }

  match(obj, output = 10) {
    // if (this.status !== 200) return;
    console.log(`matching:`, obj, output);
  }

  static _getScore() {
    return 0;
  }
}

module.exports = require(`./index`).default;

// result = {
//     score:8.1,
//     item:{}, //original item
//     matchIndex:2
//     sortkey:"..."
// }
