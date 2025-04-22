async function convertCurr() {
    const currApi = await fetch(`https://v6.exchangerate-api.com/v6/745b718039fdff872b2863c9/latest/USD`);
    let apires = await currApi.json();
    console.log(apires)
    let country = await apires.conversion_rates;

    let dropdown = document.getElementById("currency");         
    let dropdown2 = document.getElementById("convert-curr");    
    let input1 = document.getElementById("curr");               
    let input2 = document.getElementById("con-curr");          
    let btn = document.getElementById("btn");

    for (let firdrop in country) {
        dropdown.innerHTML += `<option value="${firdrop}">${firdrop}</option>`;
        dropdown2.innerHTML += `<option value="${firdrop}">${firdrop}</option>`;
    }

    dropdown2.addEventListener("change", () => {
        let rate = country[dropdown2.value];
    });

    btn.addEventListener("click", () => {
        let fromCurrency = dropdown.value;
        let toCurrency = dropdown2.value;
        let amount = parseFloat(input1.value);

        let amountInUSD = amount / country[fromCurrency];
        let convertedAmount = amountInUSD * country[toCurrency];
        input2.value = convertedAmount.toFixed(2);
    });
}
convertCurr();
