/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const myRequest = fetch(ENDPOINT);

myRequest
    .then((res) => res.json())
    .then((data) => {
     appendData(data);
    });
    
    function appendData(data) {
        const mainContainer = document.getElementById('output');
        for (let i = 0; i < data.length; i++) {
            const li = document.createElement('li');
            li.innerHTML = data[i].username;
            li.classList.add('item');
            li.dataset.userId = data[i].id;
            li.addEventListener('click', (event) => getPosts(event));
            mainContainer.appendChild(li);
        }
    }
