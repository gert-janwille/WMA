import {relu, calcDist, roundDecimal, mapRange} from '../src/util/Math';

test(`Relu 0 retuns 0.5`, () => {
  expect(relu(0)).toBe(0.5);
});

test(`Distance 15 to 20 returns 5`, () => {
  expect(calcDist(15, 20)).toBe(5);
});

test(`Number 12.8765 and decimals 2 retuns 12.87`, () => {
  expect(roundDecimal(12.8765, 2)).toBe(`12.88`);
});

test(`number 24 with current range 20-40 and new range 0-100 retuns 20`, () => {
  expect(mapRange(24, 20, 40, 0, 100)).toBe(20);
});
