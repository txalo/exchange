import {currency_data} from './data.js'


const base_rates = ["USD","JPY","ARS","EUR","AUD","RUB","BRL","GBP","CAD","CNY"];
const FLAGS_DIR = "../node_modules/flag-icons/flags/4x3/";
const API_URL = "https://v6.exchangerate-api.com/v6/3e5663daf097fa61633ab4d0/";

const $baseRatesSelect = document.querySelector("#base-rate-select");
const $ratesList = document.querySelector("#rates--list");
const $BTNConvert = document.querySelector("#convert-btn");
const $FRM = document.querySelector("#frm");
let base = document.querySelector("#frm")["base-rate"];
  

function loadBaseRates (baseRatesSelect, baseRatesList){
  baseRatesList.forEach(rate => {
    let option = document.createElement("option");
    option.value = rate;
    option.textContent = rate;
    option.selected = (base == rate)
    baseRatesSelect.appendChild(option);
  });
}

function getConvertionRates (baseRate){
  return fetch(`${API_URL}latest/${baseRate}`)
  .then(res => res.json());         
}

function loadConvertionRates(conversionData, quantity){
  $ratesList.innerHTML = "";
  document.querySelector("main").style.display = "block";
  Object.entries(conversionData.conversion_rates).forEach(([k,v]) => {
    let convData = document.createElement('article');
    convData.id = k;
    convData.className ="rates--list-item"
    convData.innerHTML = `
    <div>
      <img src="${FLAGS_DIR+k.slice(0,2).toLowerCase()}.svg" class="flag-img" />
      <span class="currency-code">${k}</span> <span class="currency-name">${(currency_data[k] && currency_data[k].name)}</span> 
    </div> 
    <div>
      <span class="currency-symbol">${(currency_data[k] && currency_data[k].symbol.grapheme)}</span> ${(v * quantity).toFixed(2)} 
    </div>
    `
    $ratesList.appendChild(convData);
});  
}

function initialize(){
  loadBaseRates($baseRatesSelect, base_rates)
  
  $FRM.addEventListener('submit',async (event) =>{
    event.preventDefault(); 
    loadConvertionRates(await getConvertionRates(($FRM.base_rate.value && $FRM.base_rate.value)), Number($FRM.quantity.value));
  })
  
  $baseRatesSelect.addEventListener('change', (e)=> 
    document.querySelector('#base-rate-flag').src = `${FLAGS_DIR+e.target.value.slice(0,2).toLowerCase()}.svg`
  );
}

initialize();


   