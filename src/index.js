import { CURRENCY_DATA, baseRates } from './data.js';
import { loadBaseRates, getConvertionRates } from './exchange.js';
import { loadConvertionRates, changeFlag } from './ui.js';

function initialize() {
  const $FRM = document.querySelector('#frm');
  const $baseRatesSelect = document.querySelector('#base-rate-select');
  const baseSelected = document.querySelector('#frm')['base-rate'];

  loadBaseRates($baseRatesSelect, baseRates, baseSelected);
  $FRM.addEventListener('submit', async (event) => {
    event.preventDefault();
    const conversionRates = await getConvertionRates(
      $FRM.base_rate.value && $FRM.base_rate.value,
    );
    loadConvertionRates(CURRENCY_DATA, conversionRates, Number($FRM.quantity.value));
  });

  $baseRatesSelect.addEventListener('change', (e) => changeFlag(e));
}

initialize();
