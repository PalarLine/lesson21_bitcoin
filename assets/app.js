

// в массиве содержаться данные о ежедневной цене биткоина

let bitcoinPrice = [10, 18, 33, 7, 31, 3, 8, 22, 29, 7, 8];

let income = 0;
let incomeMax = 0;
let dayToBuy = 0; 
let dayToSell = 0;

for(i = 0; i < (bitcoinPrice.length - 1); i++) {
    
    for(j = i + 1; j < bitcoinPrice.length; j++ ) {
        
        income = bitcoinPrice[j] - bitcoinPrice[i];
        
            if(income > incomeMax) {
             incomeMax = income; 
             dayToBuy = i;
             dayToSell = j;   
}
}
}
console.log(`Максимальная прибыль ${incomeMax} возможна при покупке Биткоина на ${dayToBuy + 1} день и продаже на ${dayToSell + 1} день`); 


