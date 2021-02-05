/*ZADANIE 1. Wypisz w konsoli:

Rodzica elementu id="buz"
Brata elementu id="baz"
Dzieci elementu id="foo"
rodzica elementu id"foo"
pierwsze dziecko elementu id="foo"
środkowe dziecko elementu id="foo"*/

console.log(document.getElementById("buz").parentElement);

console.log(document.getElementById("baz").previousElementSibling);

console.log(document.getElementById("foo").children);

console.log(document.getElementById("foo").parentNode);

console.log(document.getElementById("foo").children[0]);

console.log(document.getElementById("foo").children[1]);



/*ZADANIE 2.Napisz funkcję która przyjmie jako parametr element id="ex2". Następnie doda nasłuchiwanie eventu click na tym elemencie. Jeśli czerwony kwadrat zostanie kliknięty pobierz tekst z wewnętrzego diva tego elementu i wyświetl go w konsoli.*/



const listenEvent = (element) => {
    element.addEventListener("click", () => {
        console.log(element.children[0].children[0].children[0].children[1].
                   children[0].children[0].textContent);
    })
}

ex2Element = document.querySelector("#ex2");

listenEvent(ex2Element);




/*ZADANIE 3. Napisz funkcję która doda na każdym buttonie w div id="ex3" ten sam event kliknięcia. Zadaniem eventu będzie odsłanianie lub ukrywanie elementu span obok buttona.*/


document.querySelector('#ex3').querySelectorAll('button').forEach((element) => {
    element.addEventListener('click', (event) => {
        event.target.nextElementSibling.style.display = event.target.nextElementSibling.style.display == 'none' ? 'block' : 'none';
    });
});




/*ZADANIE 4. Dodaj event na buttony z zadania 3 tak aby po kliknięciu na dowolny z nich ich rodzic zmieniał kolor na dowolny. Całość zapisz w funkcji. Losowy kolor: var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);*/

document.querySelector('#ex3').querySelectorAll('button').forEach((element) => {
    element.addEventListener('click', () => {
        let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        element.parentElement.style.backgroundColor = randomColor;
    });
});


/*ZADANIE 5. W div id="ex5" znajdują się trzy prostokąty. Po najechaniu na dowolny z nich elementy na liście powinny zmienić swój background-color na taki jak prostokąt ale według poniższych punktów:

Tylko pierwszy element listy
tylko ostatni element listy
Parzyste elementy listy
Wszystkie elementy listy
Żaden z elementów - tylko cała lista*/


const rect = document.querySelectorAll("#ex5 div");
const list = document.querySelector("#ex5 ul");
const listElements = document.querySelectorAll("#ex5 ul li")

rect.forEach(rect => rect.addEventListener("mouseover", (e) => {

    listElements[0].style.backgroundColor = e.target.style.backgroundColor

    listElements[listElements.length - 1].style.backgroundColor = e.target.style.backgroundColor

    listElements.forEach((el, idx) => {
        if (idx % 2 === 1) el.style.backgroundColor = e.target.style.backgroundColor
    })

    listElements.forEach((el, idx) => {
        if (idx % 2 === 0) el.style.backgroundColor = e.target.style.backgroundColor
    })
    
    list.style.backgroundColor
}))


/*ZADANIE 6. W div id="ex6" zaczynając od tego diva znajdź i zapisz do zmiennych następujące kombinacje:

pierwsze dziecko -> pierwsze dziecko -> pierwsze dziecko
pierwsze dziecko -> rodzic -> pierwsze dziecko -> pierwsze dziecko -> brat -> rodzic
rodzic -> pierwsze dziecko -> rodzic -> drugie dziecko -> pierwsze dziecko -> pierwsze dziecko -> pierwsze dziecko*/


let task6 = document.querySelector("#ex6");

let firstOne = task6.firstElementChild.firstElementChild.firstElementChild;

console.log(firstOne);

let secondOne = task6.firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;

console.log(secondOne);

let thirdOne = task6.parentElement.firstElementChild.parentElement.children[1].firstElementChild.firstElementChild.firstElementChild;

console.log(thirdOne);
