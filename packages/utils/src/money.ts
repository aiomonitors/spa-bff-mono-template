export const formatMoney = (
  amount?: number,
  formatMissingValue = true,
) => {
  if (!amount && formatMissingValue) {
    return '$0'
  }

  if (!amount && !formatMissingValue) {
    throw new Error('Amount cannot be formatted');
  }

  return `$${amount?.toLocaleString()}`
};
