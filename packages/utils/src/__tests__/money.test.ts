import { formatMoney } from "../money"

describe('Money Utils', () => {
  it('Should return 0 when formatting missing value', () => {
    expect(formatMoney(undefined)).toBe('$0')
  });

  it('Should error when value undefined and formatMissingValue is false', () => {
    expect(() => {
      formatMoney(undefined, false)
    }).toThrow();
  });

  it('Should return formatted value', () => {
    expect(formatMoney(1_000)).toBe('$1,000')
  });
})
