
export default class WMA {
  constructor(obj) {
    this.status = 200;
    for (const key in obj) this[key] = obj[key];
  }

}

module.exports = require(`./index`).default;

// result = {
//     score:8.1,
//     item:{}, //original item
//     matchIndex:2
//     sortkey:"..."
// }
