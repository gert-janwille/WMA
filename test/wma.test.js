import WMA from '../src/';

test(`Relu 0 retuns 0.5`, () => {
  const wma = new WMA({
    source: [],
    output: 10,
    showOriginal: true,
    keys: [
      {key: `matching-one`, m: 20},
      {key: `matching-two`, m: 50}
    ]
  });

  expect(typeof wma).toBe(`object`);
});
