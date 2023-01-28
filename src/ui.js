function loadConvertionRates(currencyData, conversionData, quantity) {
  const $ratesList = document.querySelector('#rates--list');
  const FLAGS_DIR = 'https://raw.githubusercontent.com/lipis/flag-icons/4f420bdd2e954f6da11220f1136fa181ed7019e7/flags/4x3/';
  $ratesList.innerHTML = '';
  document.querySelector('main').style.display = 'block';
  Object.entries(conversionData.conversion_rates).forEach(([k, v]) => {
    if (currencyData[k]) {
      const convData = document.createElement('article');
      convData.id = k;
      convData.className = 'rates--list-item';
      convData.innerHTML = `
      <div>
        <img src='${FLAGS_DIR + k.slice(0, 2).toLowerCase()}.svg' class='flag-img' />
        <span class='currency-code'>${k}</span> 
        <span class='currency-name'>
          ${currencyData[k] && currencyData[k].name}
        </span> 
      </div> 
      <div>
        <span class='currency-symbol'>
          ${currencyData[k] && currencyData[k].symbol.grapheme}
        </span> 
        <span class='value'>${(v * quantity).toFixed(2)}</span> 
      </div>
      `;
      $ratesList.appendChild(convData);
    }
  });
}

function changeFlag(element) {
  const FLAGS_DIR = 'https://raw.githubusercontent.com/lipis/flag-icons/4f420bdd2e954f6da11220f1136fa181ed7019e7/flags/4x3/';
  document.querySelector('#base-rate-flag').src = `${FLAGS_DIR + element.target.value.slice(0, 2).toLowerCase()}.svg`;  
}

export { loadConvertionRates, changeFlag };
