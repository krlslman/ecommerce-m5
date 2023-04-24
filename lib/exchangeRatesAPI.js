export async function getExchangeRate(amount, baseCurrency, targetCurrency) {
  const host = 'api.frankfurter.app';
  const response = await fetch(`https://${host}/latest?amount=${amount}&from=${baseCurrency}&to=${targetCurrency}`);
  const data = await response.json();
  return data.rates.TRY;
}
