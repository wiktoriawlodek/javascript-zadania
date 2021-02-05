/*ZADANIE 1. Wyszukaj na stronie wszystkie elementy o klasie list i zapisz wynik do odpowiedniej zmiennej*/

const list = document.querySelectorAll(".list");
console.log(list);


/*ZADANIE 2. Stwórz funkcję która będzie zwracać elementy(tagi) na podstawie podstawie przesłanego parametru. Wynik działania funkcji zapisz do zmiennej i wyświetl w konsoli.*/


const showT = (tag) => {
	const tags = document.getElementsByTagName(tag);
	console.log(tags);
};

showT("ul");



/*ZADANIE 3. Znajdź na stronie element listy od id="list" i zapisz do odpowiedniej zmiennej.*/

let finder = document.querySelector("#list");
console.log(finder);


/*ZADANIE 4. Napisz funkcje która będzie wypisywać w konsoli elementy przekazane w parametrze. Do funkcji przekaż następujące elementy:

a) wszystkie elementy li na stronie
b) wszystkie elementy ul na stronie
c) wszystkie spany na stronie
d) wszystkie spany znajdujące się w elemencie div z klasą list
e) wszystkie spany znajdujące się w elemencie div który posiada id="spans"*/

const show = (className, idName) => {
	const a = document.getElementsByTagName("li");
	const b = document.getElementsByTagName("ul");
	const c = document.getElementByTagName("span");
	const d = document.querySelectorAll(`.${className} span`);
	const e = document.querySelectorAll(`#${idName} span`);
	
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(d);
	console.log(e);
}
show("list", "spans")

