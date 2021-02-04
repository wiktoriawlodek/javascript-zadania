/*ZADANIE 1. W konsoli stwórz dwie zmienne przechowujące liczby. Następnie za pomocą instrukcji warunkowej if ... else , wypisz w konsoli, która z nich jest większa.*/

let firstone = 5;
let secondone = 2;

if(firstone>secondone){
	console.log("Pierwsza liczba jest większa.");
}else{
	console.log("Druga liczba jest większa.")
}


/*ZADANIE 2. W konsoli stwórz trzy zmienne przechowujące liczby. Następnie za pomocą instrukcji warunkowej if, else if i else wypisz w konsoli, która z nich jest największa.*/

let a = 29;
let b = 5;
let c = 24;

if(a>b&&a>c){
	console.log("Liczba a jest największa");
}else if(b>a&&b>c){
	console.log("Liczba b jest największa");
}else{
	console.log("Liczba c jest największa");
}


/*ZADANIE 3. W konsoli stwórz pętle, która 10 razy wypisze w konsoli tekst "Lubię JavaScript".*/

for(let i = 0; i < 10; i++){
	console.log("Lubię JavaScript.");
}



/*ZADANIE 4. W konsoli stwórz zmienną result i przypisz do niej liczbę 0. Następnie stwórz pętle, która doda do siebie liczby od 1 do 10.*/

let result = 0;

for(let i = 0; i <= 10; i++){
	result += i;
}

console.log(result);


/*ZADANIE 5. W konsoli napisz program, który na podstawie wartości zmiennej np. var n = 5; wypisuje wszystkie liczby od zera do n. Przy każdej liczbie program ma napisać, czy liczba jest parzysta czy nie. Np.:

0 – parzysta
1 – nieparzysta
2 – parzysta
3 – nieparzysta
...*/

var n = 8;

for(let i = 0; i <= n; i++){
	if(i%2 == 0){
		console.log( i + " - parzysta");
	}else{
		console.log(i + " - nieparzysta");
	}
}



/*ZADANIE 6. W konsoli stwórz dwie pętle niezależne i wypisz wartości ich liczników w każdej iteracji. Wykorzystaj: konkatenację np.

console.log("i= " + i + ", j= " + j);*/

for (let x = 1; x <= 10; x++){
	for(let y = 1; y <= 10; y++){
		console.log("x= " + x + " y= " + y);
	}
}



/*ZADANIE 7. FizzBuzz - wypisz w consoli liczby od 0 do 100. Zamiast każdej podzielnej liczby przez 3 wypisz "Fizz", zamiast każdej podzielnej liczby przez 5 wypisz "Buzz" a zamiast każdej podzielnej liczby przez 3 i przez 5 wypisz "FizzBuzz"

Przykład:

0 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz ....*/


for (i = 0; i<100; i++){
	if(i%15 == 0){
		console.log("FizzBuzz");
	}else if(i%3 == 0){
		console.log("Fizz");
	}else if(i%5 == 0){
		console.log("Buzz");
	}else{
		console.log(i);
	}
}




/*ZADANIE 8. Narysuj w konsoli:

a)

*
**
***
****
*****

*/


for (i = 1; i <= 5; i++){
	let line = "";
	for (let j = 1; j <= i; j++){
		line+= "*";
	}
	console.log(line);
}




/*
b)

    *
   * *
  * * *
 * * * *
* * * * *


*/
let star = " *";

for(let x = 0; x < 5; x++){
	var result = "";
	for(y = 0; y < 5 - x; y++){
		result += " ";
	}
	for (z = 0; z < x + 1; z++){
		result += star;
	}
	console.log(result);
}




/*
c)

    *
   ***
  *****
 *******
*********

*/





/*
d)

*1234
**234
***34
****4
*****
-----
*****
****4
***34
**234
*1234

*/





/*
e)

    *
   * *
  * * *
 * * * *
* * * * *
    *
    *
    *

*/