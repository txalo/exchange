export function loadBaseRates(baseRatesSelect, baseRatesList, base) {
  baseRatesList.forEach((rate) => {
    const option = document.createElement('option');
    option.value = rate;
    option.textContent = rate;
    option.selected = base === rate;
    baseRatesSelect.appendChild(option);
  });
}

export function getConvertionRates(baseRate) {
  const apiURL = 'https://v6.exchangerate-api.com/v6/3e5663daf097fa61633ab4d0/';
  return fetch(`${apiURL}latest/${baseRate}`).then((res) => res.json());
}
