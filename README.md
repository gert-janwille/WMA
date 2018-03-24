<div align="center">
  <a href="https://github.com/gert-janwille/WMA">
    <img width="300"" src="https://raw.github.com/gert-janwille/WMA/master/docs/wma.png">
  </a>
  <br/>
  <br/>
  <br/>
  <p>
    The WMA - Matching Algorithm is a light-weighted and fast library to match an object against an object array. Define matching keys and match. Make as many matching objects as you want.
</div>


![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Gert-Jan Wille](https://img.shields.io/badge/Author-gert--janwille-yellow.svg)

# WMA - Matching Algorithm

## Install

Install with npm:
```bash
$ npm install --save-dev WMA
```

Install with yarn:
```bash
$ yarn add WMA --dev
```
## Usage

### `Import the library`

```javascript
import WMA from 'WMA' //ES6
//or
var WMA = require('WMA'); //nodejs
```

or download the lib folder and add the script tag:
```html
<script src="./Path-to-lib/wma.js" charset="utf-8"></script>
```

> Tip: If you use a script tag pleas add this before closing the body tag.

<br/>

### `Declare a new instance`
Making new instance of the WMA Class

```javascript
const wma = new WMA({
  source: data,               // The object array
  matchIndex: 10,             // Optional - add number on 10 first items.
  showOriginal: true,         // Optional - keep same matching object in results.
  decimals: 2,                // Optional - Numbers of decimals for matching percent.
  verbose: true,              // Optional - Give output.
  keys: [                     // Array of all keys.
    {
      key: `matching-one`,    // Name of the key.
      m: 20                   // Number of importance.
    },
    {key: `matching-two`, m: 50}
  ]
})
```

#### `source`
This is simply the full dataset, the object array with all the matching objects.

#### `matchIndex`
_optional_ - If you define this the output object will contain a key `matchIndex`. This can be used for pagination. If the matchIndex is default set to 10. This means every 10the object the index will increase.

#### `showOriginal`
_optional_ - If this is set to `True`. The result array will contain the object of matching if this object is in the array. Default it's set `False`.

#### `decimals`
_optional_ - If you define this param each item  in item of your result array will contain a percent with 2 digits after the comma. Default it set to `2`.

#### `verbose`
_optional_ - Default set `False`. If set `True`, you can see output of the library in your console.

#### `Keys`
Keys is an object array that define every matching key with a multiplier. The highest multiplier has the most impact on the matching result.

```javascript
keys: [
  {
    key: 'string',
    m: number
  },
  {
    key: 'height',
    m: 10
  }
  ...
]
```
You can define as many keys as you want. The multiplier can have a positive or negative number.

<br/>

### `Match`
The match is a function that allows you to match any object to the defined object array.

```javascript
wma.match({
  id: 1,
  height: 10,
  width: 5,
  color: 'purple'
});
```

#### `object`
The object is an single object containing key values.
```javascript
{
  id: 1,
  height: 10,
  width: 5,
  color: 'purple'
}
```
> Note: At least one key must be defined in the keys array when declaring a new instance.

<br/>

## Examples
You'll find an example of the matching in [the demo directory](https://github.com/gert-janwille/WMA/tree/master/demo).

Feel free to contribute more!


## Running the tests
We use Jest for testing. If you want to run these tests type folowing command in your terminal.

using npm:
```bash
$ npm run test
```

using yarn:
```bash
$ yarn test
```

All testes are located in [the test directory](https://github.com/gert-janwille/WMA/tree/master/test). Some included are:

* [Math test](https://github.com/gert-janwille/WMA/blob/master/test/math.test.js)
* [WMA test](https://github.com/gert-janwille/WMA/blob/master/test/wma.test.js)

Feel free to contribute more!

## FAQ
<details>

<summary>Can I write unit tests with this library?</summary>

Definitely yes! You can write unit and integration tests with this library.The tests in this project show several examples of unit testing with this library.

</details>

<details>

<summary>Can I hide the matching object in the results?</summary>

Yes you can set a parameter when declaring an new instance: `showOriginal: true || false`.

</details>

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

Write code in [the src directory](https://github.com/gert-janwille/WMA/tree/master/src). The source code will compile and placed in [the lib directory](https://github.com/gert-janwille/WMA/tree/master/lib). Open a browser an serve to `localhost:3000` and you'll see the contents of [the demo directory](https://github.com/gert-janwille/WMA/tree/master/demo) that use the new compiled WMA Library.

If you want to contribute you need to install all packages who are required and start the compiler. Just use the command:

using npm:
```bash
$ npm install && npm run start
```

using yarn:
```bash
$ yarn && yarn start
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/gert-janwille/Eleonora/tags).

## Authors

* **Gert-Jan Wille** - *Initial work* - [gert-janwille](https://github.com/gert-janwille)

See also the list of [contributors](https://github.com/gert-janwille/Eleonora/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Accomplished by [De Jongens Van Boven](https://www.dejongensvanboven.nl)
