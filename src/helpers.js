export const toCurrency = num => num && num.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD'
});
