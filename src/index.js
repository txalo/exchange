import {currency_data} from './data.js'

let example = {
    "result": "success",
    "documentation": "https://www.exchangerate-api.com/docs",
    "terms_of_use": "https://www.exchangerate-api.com/terms",
    "time_last_update_unix": 1647820802,
    "time_last_update_utc": "Mon, 21 Mar 2022 00:00:02 +0000",
    "time_next_update_unix": 1647907202,
    "time_next_update_utc": "Tue, 22 Mar 2022 00:00:02 +0000",
    "base_code": "USD",
    "conversion_rates": {
        "USD": 1,
        "AED": 3.6725,
        "AFN": 88.2970,
        "ALL": 112.2555,
        "AMD": 490.4745,
        "ANG": 1.7900,
        "AOA": 455.9972,
        "ARS": 109.8751,
        "AUD": 1.3498,
        "AWG": 1.7900,
        "AZN": 1.7041,
        "BAM": 1.7709,
        "BBD": 2.0000,
        "BDT": 85.3266,
        "BGN": 1.7710,
        "BHD": 0.3760,
        "BIF": 2012.9432,
        "BMD": 1.0000,
        "BND": 1.3544,
        "BOB": 6.8811,
        "BRL": 5.0512,
        "BSD": 1.0000,
        "BTN": 76.1336,
        "BWP": 11.6024,
        "BYN": 3.1855,
        "BZD": 2.0000,
        "CAD": 1.2608,
        "CDF": 1991.7094,
        "CHF": 0.9327,
        "CLP": 801.4131,
        "CNY": 6.3707,
        "COP": 3832.1391,
        "CRC": 647.4015,
        "CUP": 24.0000,
        "CVE": 99.8413,
        "CZK": 22.4577,
        "DJF": 177.7210,
        "DKK": 6.7551,
        "DOP": 54.9291,
        "DZD": 143.2346,
        "EGP": 15.7470,
        "ERN": 15.0000,
        "ETB": 51.0695,
        "EUR": 0.9055,
        "FJD": 2.0960,
        "FKP": 0.7602,
        "FOK": 6.7551,
        "GBP": 0.7602,
        "GEL": 3.2094,
        "GGP": 0.7602,
        "GHS": 8.1740,
        "GIP": 0.7602,
        "GMD": 53.4456,
        "GNF": 8937.3541,
        "GTQ": 7.7134,
        "GYD": 209.0941,
        "HKD": 7.8290,
        "HNL": 24.5684,
        "HRK": 6.8222,
        "HTG": 105.1837,
        "HUF": 338.5328,
        "IDR": 14266.0805,
        "ILS": 3.2549,
        "IMP": 0.7602,
        "INR": 76.0381,
        "IQD": 1459.0977,
        "IRR": 42049.0529,
        "ISK": 129.3631,
        "JEP": 0.7602,
        "JMD": 153.1171,
        "JOD": 0.7090,
        "JPY": 119.3389,
        "KES": 114.7379,
        "KGS": 104.4541,
        "KHR": 4038.6723,
        "KID": 1.3499,
        "KMF": 445.4606,
        "KRW": 1210.3255,
        "KWD": 0.2996,
        "KYD": 0.8333,
        "KZT": 509.0878,
        "LAK": 12567.8871,
        "LBP": 1507.5000,
        "LKR": 269.7075,
        "LRD": 154.1268,
        "LSL": 14.9334,
        "LYD": 4.6619,
        "MAD": 9.6320,
        "MDL": 18.4277,
        "MGA": 3152.6290,
        "MKD": 56.0462,
        "MMK": 1767.2696,
        "MNT": 2914.2223,
        "MOP": 8.0643,
        "MRU": 36.3721,
        "MUR": 43.5357,
        "MVR": 15.4677,
        "MWK": 818.8049,
        "MXN": 20.4199,
        "MYR": 4.1679,
        "MZN": 63.9894,
        "NAD": 14.9334,
        "NGN": 416.6685,
        "NIO": 35.8010,
        "NOK": 8.7565,
        "NPR": 121.8137,
        "NZD": 1.4498,
        "OMR": 0.3845,
        "PAB": 1.0000,
        "PEN": 3.7546,
        "PGK": 3.5363,
        "PHP": 52.3572,
        "PKR": 181.0440,
        "PLN": 4.2471,
        "PYG": 7026.0584,
        "QAR": 3.6400,
        "RON": 4.4621,
        "RSD": 106.6953,
        "RUB": 104.3642,
        "RWF": 1044.4903,
        "SAR": 3.7500,
        "SBD": 7.9326,
        "SCR": 14.4552,
        "SDG": 445.4263,
        "SEK": 9.4223,
        "SGD": 1.3545,
        "SHP": 0.7602,
        "SLL": 11633.1321,
        "SOS": 578.4343,
        "SRD": 20.6114,
        "SSP": 428.4843,
        "STN": 22.1839,
        "SYP": 2522.9845,
        "SZL": 14.9334,
        "THB": 33.4085,
        "TJS": 11.8393,
        "TMT": 3.4994,
        "TND": 2.8855,
        "TOP": 2.2648,
        "TRY": 14.7906,
        "TTD": 6.7852,
        "TVD": 1.3499,
        "TWD": 28.2139,
        "TZS": 2313.2980,
        "UAH": 30.0739,
        "UGX": 3581.9237,
        "UYU": 42.6652,
        "UZS": 11289.6462,
        "VES": 4.2925,
        "VND": 22852.1219,
        "VUV": 111.9152,
        "WST": 2.5848,
        "XAF": 593.9474,
        "XCD": 2.7000,
        "XDR": 0.7227,
        "XOF": 593.9474,
        "XPF": 108.0512,
        "YER": 251.2406,
        "ZAR": 14.9366,
        "ZMW": 17.7459,
        "ZWL": 134.1178
    }
    }

    const base_rates = ["USD","JPY","ARS","EUR","AUD","RUB","BRL","GBP","CAD","CNY"]
    const FLAGS_DIR = "../node_modules/flag-icons/flags/4x3/"
    
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
    
    //const $infoBaseRate = document.querySelector("#info--base-rate");

    //$infoBaseRate.innerHTML = `Exchange rates based on <b>${example.base_code}</b> at ${example.time_last_update_utc}`;
    loadBaseRates($baseRatesSelect, base_rates)
    Object.entries(example.conversion_rates).forEach(([k,v]) => {
        let convData = document.createElement('article');
        convData.id = k;
        convData.className ="rates--list-item"
        convData.innerHTML = `
        <div>
          <img src="${FLAGS_DIR+k.slice(0,2).toLowerCase()}.svg" class="flag-img" />
          <span class="currency-code">${k}</span> <span class="currency-name">${(currency_data[k] && currency_data[k].name)}</span> 
        </div> 
        <div>
          <span class="currency-symbol">${(currency_data[k] && currency_data[k].symbol.grapheme)}</span> ${v.toFixed(2)} 
        </div>
        `
        $ratesList.appendChild(convData);
    });
    
    $FRM.addEventListener('submit', (event) =>{
      event.preventDefault();      
    })
    //<img src="https://raw.githubusercontent.com/stefangabos/world_countries/master/data/flags/48x48/${k.slice(0,2).toLowerCase()}.png" />

   