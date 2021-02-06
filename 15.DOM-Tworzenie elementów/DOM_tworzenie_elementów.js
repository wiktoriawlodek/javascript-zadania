//ZADANIE 1. Stwórz i dodaj do strony element div wraz z tekstem: "To jest nowy element";

const el = document.createElement("div");
el.innerText = "To jest nowy element";
document.body.appendChild(el);


//ZADANIE 2. Stwórz odpowiednie elementy i dodaj do strony listę ulubionych owoców (minimum 6)

et favFruits = ["Watermelon", "Strawberries", "Banana", "Orange", "Melon", "Raspberries"];
let ulElement = document.createElement('ul');
for (let i = 0; i < 6; i++) {
	let liElement = document.createElement('li');
    liElement.innerText = favFruits[i];
	ulElement.appendChild(liElement);
}
document.body.appendChild(ulElement);

//ZADANIE 3. Na podstawie listy z zadanie 2 stwórz event który usunie z tej listy co drugi element.

//ZADANIE 4. Dodaj do strony button po kliknięciu na button ma on się usuwać ze strony.

let button = document.createElement("button");
button.innerText = "CLICK ME!";
button.addEventListener("click", (e) => {
    e.target.remove();
});
document.body.appendChild(button);



//ZADANIE 5. Na podstawie losowej liczby utwórz odpowiednią ilość divów z tekstem: "to jest div numer ${numer}"


let random = Math.floor(Math.random() * 50);
for (let i = 0; i < random; i++) {
    const randomDiv = document.createElement('div');
    randomDiv.innerText = `To jest div numer: ${i}`;
    document.body.appendChild(randomDiv);
}


/*ZADANIE 6. Na podstawie obiektu stwórz struktórę w html

{ div1: 'to jest div', span1: 'to jest span', div2: { div3: 'to jest div', }, span2: 'to jest span', }*/

const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');

const span1 = document.createElement('span');
const span2 = document.createElement('span');

document.body.appendChild(div1);
div1.innerHTML = 'To jest div';

document.body.appendChild(span1);
span1.innerHTML = 'To jest span';

document.body.appendChild(div2);
div2.appendChild(div3);
div3.innerHTML = 'To jest div';

document.body.appendChild(span2);
span2.innerHTML = 'To jest span';

