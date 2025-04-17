// let check = fetch("https://v6.exchangerate-api.com/v6/745b718039fdff872b2863c9/latest/USD"){}
// check.then((value2) => {
//     return value2.json()
//     let count = value2.conversion_rates
//     let dropdown = document.getElementById("currency")
//     for(let firdrop in count){
//         // console.log(firdrop)
//         dropdown.innerHTML += `<option>${firdrop}</option>`
//     }
// })
function convertCurr(){
    let currApi = fetch("https://v6.exchangerate-api.com/v6/745b718039fdff872b2863c9/latest/USD");
    let apires = currApi.json();
    let dropdown = document.getElementById("currency")
    let dropdown2 = document.getElementById("convert-curr")
    let country = apires.conversion_rates
    for(let firdrop in country){
        dropdown.innerHTML += `<option>${firdrop}</option>`
        dropdown2.innerHTML += `<option>${firdrop}</option>`
    }
}
function curr() {
    let check = country[dropdown.value]
    console.log(check)
}
convertCurr()