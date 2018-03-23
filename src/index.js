/**
 * WMA - Matching Algorithm
 * This fast and lightweighted library can match any object to
 * an object array using the keys and its values.
 * For a full working demo have a look in the demo folder
 * located in the root folder.
 *
 * Using this library means you accept and agree the terms and
 * conditions of the MIT License.
 *
 * @version 1.0
 * @author  Gert-Jan Wille, https://github.com/gert-janwille/
 * @updated 2018-03-23
 *
 */
const WMA = require(`./wma.js`);

module.exports = WMA.default ? WMA.default : WMA;
