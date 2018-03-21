# WMA - Matching Algorithm

```bash
$ npm install WMA --save-dev
```

```bash
$ yarn add --dev WMA
```

```html
<script src="./Path-to-lib/wma.js" charset="utf-8"></script>
```
```javascript
import WMA from 'WMA'

const wma = new WMA({
  source: data,
  output: 10,                 // Optional
  showOriginal: true,         // Optional
  keys: [
    {key: `matching-one`, m: 20},
    {key: `matching-two`, m: 50}
  ]
})
```
