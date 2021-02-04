/* ZADANIE 1. W konsoli stwórz dwie zmienne i przypisz do nich dwie wartości boolean. Porównaj je za pomocą odpowiedniego operatora. */

let a = false;
let b = false;

console.log(a == b);


/* ZADANIE 2. W konsoli stwórz trzy zmienne. Dwie niech przechowują dowolne liczby, a trzecia o nazwie moduloResult niech przechowuje liczbę 0. Oblicz resztę z dzielenia (modulo) tych liczb i zapisz wynik w zmiennej moduloResult. Wypisz zmienną moduloResult w konsoli.*/

let c = 25;
let d = 5;
let moduloResult = 0;

moduloResult = (c % d);
console.log(moduloResult);

/* ZADANIE 3. W konsoli stwórz trzy zmienne. Dwie niech przechowują dowolne stringi, a jedna o nazwie stringsResult, niech przechowuje pusty string np. let stringsResult = "" Połącz stringi za pomocą konkatenacji i zapisz wynik w zmiennej stringsResult oraz wypisz go w konsoli. */

let string1 = "Zielony ";
let string2 = "dom";
let stringResult = "";

stringResult = (string1 + string2);
console.log(stringResult);

/* ZADANIE 4. W konsoli stwórz dwie zmienne:

var someNumber = 425;
var someString = "425";
Porównaj te zmienne za pomocą operatorów == oraz ===. Wypisz wyniki w konsoli. Opowiedz grupie o wynikach */

var someNumber = 425;
var someString = "425";

console.log(someNumber == someString); // Zwraca: true - sprawdza tylko zawartość.
console.log(someNumber === someString); // Zwraca: false - sprawdza zawartość i typ, number != string


/* ZADANIE 5. W konsoli stwórz zmienną o nazwie counter. Wstaw do niej liczbę 30. Wypisz jej wartość w konsoli, a następnie:
- za pomocą inkrementacji zwiększ wartość zmiennej counter
- wypisz ją w konsoli
- za pomocą dekrementacji zmniejsz wartość zmiennej counter
- wypisz ją w konsoli. */


var counter = 30;

console.log(counter);
counter++;
console.log(counter);
counter--;
console.log(counter);


/* ZADANIE 6. W konsoli stwórz trzy zmienne. Dwie niech przechowują dowolne liczby, a jedna o nazwie result, niech przechowuje null. Sprawdź czy liczba pierwsza jest większa od drugiej za pomocą odpowiedniego operatora i zapisz wynik w zmiennej result. Wypisz tą zmienną w konsoli. */

let x = 29;
let y = 29;
let result = null;


	if (x>y){
		result = "Liczba: " + x + " jest większa od: " + y;
	}else if (x===y){
		result = "Liczby: " + x + " i " + y + " są równe.";
	}else{
		result = "Liczba: " + y + " jest większa od: " + x;
	}
		console.log(result);
