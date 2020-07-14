const {rand, display, sum, multiplicatedResult, avarageResult,
  contains, minValue, maxValue, bubbleSort} =
  require('./function.fp');

describe('rand function', function() {
  it('rand', () => {
    for (let i = 0; i < 10; i++) {
      const randomValue = rand();
      expect(randomValue > 0).toBe(true);
      expect(randomValue < 11).toBe(true);
    }
  });
});

describe('display function test', function() {
  const array = [1, 2, 3, 4];
  it('display', () => {
    expect(display(array)).toBe(undefined);
  });
});

describe('multiplicate function test', function() {
  const testData = [1, 2, 3];
  const testData2 = [0, 1, 2];
  const testData3 = [1];
  const testData4 = [];

  it('multiplicate', () => {
    expect(multiplicatedResult(testData)).toBe(6);
    expect(multiplicatedResult(testData2)).toBe(0);
    expect(multiplicatedResult(testData3)).toBe(1);
    expect(multiplicatedResult(testData4)).toEqual(expect.arrayContaining([]));
  });
  it('avarage test', () => {
    const testData = [1, 2, 3, 3];
    const testData2 = [0, 1, 2];
    const testData3 = [1];
    const testData4 = [];

    expect(avarageResult(testData)).toBe(2.25);
    expect(avarageResult(testData2)).toBe(1);
    expect(avarageResult(testData3)).toBe(1);
    expect(avarageResult(testData4)).toEqual(expect.arrayContaining([]));
  });
});


describe('Sum and Contains function tests', function() {
  const testData = [1, 2, 3, 4];

  it('sum', () => {
    const result = sum(testData);
    expect(result).toBe(10);
  });

  it('contains good scenario', () => {
    expect(contains(testData, 1)).toBeTruthy();
    expect(contains(testData, 2)).toBeTruthy();
    expect(contains(testData, 3)).toBeTruthy();
    expect(contains(testData, 4)).toBeTruthy();
  });

  it('contains bad scenario', () => {
    expect(contains(testData, -1)).toBe(false);
    expect(contains(testData, 0)).toBe(false);
    expect(contains(testData, 5)).toBe(false);
  });
});

describe('min-max, bubbleSort test', function () {
  const testData1 = [3, 2, 3, 4];
  const testData2 = [0, 1, 2, 3, 4];
  const testData3 = [4, 3, 2, 1, 0];
  const testData4 = [-5, -4, -3];

  it('minValue', () => {
    expect(minValue(testData1)).toBe(2);

    expect(minValue(testData2)).toBe(0);

    expect(minValue(testData3)).toBe(0);

    expect(minValue([])).toBe(undefined);
  });

  it('maxValue', () => {
    expect(maxValue(testData1)).toBe(4);

    expect(maxValue(testData2)).toBe(4);

    expect(maxValue(testData3)).toBe(4);

    expect(maxValue(testData4)).toBe(-3);

    expect(maxValue([])).toBe(null);
  });

  it('bubbleSort test', () => {
    expect(bubbleSort(testData1)).toEqual(expect.arrayContaining([2, 3, 3, 4]));

    expect(bubbleSort(testData2)).
        toEqual(expect.arrayContaining([0, 1, 2, 3, 4]));

    expect(bubbleSort(testData3)).
        toEqual(expect.arrayContaining([0, 1, 2, 3, 4]));
  });
});
