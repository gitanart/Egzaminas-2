/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const form = document.querySelector('form');
const searchInput = document.getElementById('search');
const output = document.getElementById('output');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const kilograms = Number(searchInput.value);
    const pounds = weightConvert(kilograms); 
    

    output.textContent = `${pounds} pounds`;
    

});
    
   
const converter = (search) => {

}


const weightConvert = (kilograms) => {
    return kilograms * 2.2046;
}

