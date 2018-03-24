# WMA - Matching Algorithm

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


### `Declare a new instance`
Making new instance of the WMA Class

```javascript
const wma = new WMA({
  source: data,               // The object array
  matchIndex: 10,                 // Optional - add number on 10 first items.
  showOriginal: true,         // Optional - keep same matching object in results.
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

#### `matchIndex`

#### `showOriginal`

#### `Keys`

#### `decimals`

#### `verbose`


### Match

```javascript
wma.match(object-to-match);
```

#### `object`

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/gert-janwille/Eleonora/tags).

## Authors

* **Gert-Jan Wille** - *Initial work* - [gert-janwille](https://github.com/gert-janwille)

See also the list of [contributors](https://github.com/gert-janwille/Eleonora/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Accomplished by [De Jongens Van Boven](https://www.dejongensvanboven.nl)
