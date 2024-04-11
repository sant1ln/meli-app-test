export const formatValueToCurrency = (amount, decimal) => {
  const totalValue = amount + '.' + decimal;
  const currencyValue = new Intl.NumberFormat('es-AR',{style:'currency', currency: 'ARS'}).format(totalValue);
  return currencyValue;
}

export const printSimbol = (index, categories) => {
  if(index < categories.length - 1){
    return ' >'
  }
}