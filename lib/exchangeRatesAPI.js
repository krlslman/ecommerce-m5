export async function getExchangeRate(amount, baseCurrency, targetCurrency) {
  const host = 'api.frankfurter.app';
  const response = await fetch(`https://${host}/latest?amount=${amount}&from=${baseCurrency}&to=${targetCurrency}`);
  const data = await response.json();
  console.log(data.rates.TRY);
  // const priceInTRY = 
  return data.rates.TRY;
}
