/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const myRequest = fetch(ENDPOINT);

myRequest
    .then((res) => res.json())
    .then((data) => {
       
        const divElement = document.getElementById(`output`);
        
        const titleElement = document.createElement(`h2`);
        const brandName = data[0].brand;
        titleElement.textContent = brandName;


        divElement.appendChild(titleElement)
        document.body.appendChild(divElement)
    });
   

   