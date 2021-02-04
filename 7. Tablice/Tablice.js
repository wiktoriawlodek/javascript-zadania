//Zadanie 1
//Stwórz tablicę z dowolnymi elementami a następnie wypisz je w konsoli.


let tab = ["Ser", "Szynka", "Pieczarki", 2];
for (let s = 0; s<tab.length; s++){
	console.log(tab[s]);
}



//Zadanie 2
//Stwórz tablicę z dowolnymi elementami a następnie w konsoli wypisz:


//a)Pierszy i drugi element

let tab = ["Ser", "Szynka", "Pieczarki", "Salami", "Boczek"];

console.log("Pierwszy element: " + tab[0] + ". Drugi element: " + tab[1]);


//b) Ostatni element

let tab = ["Ser", "Szynka", "Pieczarki", "Salami", "Boczek"];

console.log("Ostatni element: " +[tab[tab.length - 1]]);


//c) Wszystkie elementy

let tab = ["Ser", "Szynka", "Pieczarki", "Salami", "Boczek"];

console.log("Wszystkie elementy: " + tab);

//d) Co drugi element

let tab = ["Ser", "Szynka", "Pieczarki", "Salami", "Boczek", "Kurak"];

for (let i = 0; i<tab.length; i++) {
    if (i % 2) {
        console.log("Co drugi element: " + tab[i])
    }
}



//e) Wszystkie stringi

let tab = ["Ser", "Szynka", 2, 3, "Pieczarki", 6, "Salami", "Boczek", "Kurak"];

tab.forEach((s) => {
    if (typeof(s) == "string") {
        console.log("String: " + s);
    }
});


//f) Wszystkie numbery*/


let tab = ["Ser", "Szynka", 2, 3, "Pieczarki", 6, "Salami", "Boczek", "Kurak"];

tab.forEach((n) => {
    if (typeof(n) == "number") {
        console.log("Number: " + n);
    }
});


/*Zadanie 3
Stwórz tablicę tylko z elementami typu number. W konsoli wypisz:*/


let tab = [ 2, 8, 3, 7, 5, 1 ];


//a) sumę wszystkich elementów

let tab = [ 2, 8, 3, 7, 5, 1 ];
let a = 0;

for(let i = 0; i<tab.length; i++) {
    a = a + tab[i];
}

console.log("Suma wszystkich elementów: " + a);



//b) różnicę wszystkich elementów

let tab = [ 2, 8, 3, 7, 5, 1 ];
let a = 0;

for(let i = 0; i<tab.length; i++) {
    a = a - tab[i];
}

console.log("Różnica wszystkich elementów: " + a);



//c) średnią wszystkich elementów

let tab = [ 2, 8, 3, 7, 5, 1 ];
let a = 0;
let b = 0;

for(let i = 0; i<tab.length; i++) {
    a = a + tab[i];
		b = a / tab.length;
}

console.log("Srednia wszystkich elementów elementów: " + b);


//d) elementy parzyste

let tab = [ 2, 8, 3, 7, 5, 1 ];
let a = 0;
let b = 0;

for(let i = 0; i<tab.length; i++) {
		if(tab[i]%2 == 0){
	  console.log("Liczba parzysta: " + tab[i]);
		}
}


//e) elementy nieparzyste


let tab = [ 2, 8, 3, 7, 5, 1 ];
let a = 0;
let b = 0;

for(let i = 0; i<tab.length; i++) {
		if(tab[i]%2 != 0){
			console.log("Liczba nieparzysta: " + tab[i]);
		}
}



//f) największą liczbę

let tab = [ 2, 8, 3, 7, 5, 1 ];
let biggest = tab[0];

for(let i = 0; i<tab.length; i++) {
		if(tab[i] > biggest){
			biggest = tab[i]
		}
}
console.log ("Największą liczbą jest: " + biggest);


//g) najmniejszą liczbę

let tab = [ 2, 8, 3, 7, 5, 1 ];
let min = tab[0];

for(let i = 0; i<tab.length; i++) {
		if(tab[i] < min){
			min = tab[i]
		}
}
console.log ("Najmniejszą liczbą jest: " + min);


//h) wypisz tablicę od tyłu


let tab = [ 2, 8, 3, 7, 5, 1 ];
tab.reverse();
console.log(tab);



//nie rozpatrujemy warunków brzegowych. Liczby nie powtarzają się. ** Nie używamy obiektu Math





//Zadanie 4
//Napisz funkcję która przyjmie jako parametr tablice liczb. Zwróć do konsoli sumę wszystkich liczb.

let tab = [2, 4, 6, 3, 5];
let sum = 0;

for (let i = 0; i<tab.length; i++){
	sum = sum + tab[i];
}
console.log("Suma wszystkich elementów to: " + sum + ".");




//Zadaie 5
//Napisz funkcję która przyjmuje jako parametr tablicę liczb. Następnie wypisz w konsoli wszystkie elementy tej tablicy pomnożone przez średnią tablicy


function abc (def) {
    let a = 0;
    let b = 0;
    for (let i = 0; i < def.length; i++) {
        a = a + def[i];
    }
    b = a/def.length;
    for (let j = 0; j < def.length; j++) {
        console.log("Każdy element pomnożony przez średnią : " + def[j] * b);
    }
}

let ghi = [5,2,3,7]
abc(ghi);

//Zadanie 6
//Napisz funkcję która zwraca średnią liczb parzystych z tablicy którą przekażesz jako parametr tej funkcji.

function abc (def) {
    let a = 0
    let b = 0
    for(let i = 0; i < def.length; i++) {
        if (def[i] % 2 === 0) {
            a = def[i];
            b = a / def.length;
            console.log(b);
        }
    }
}

let ghi = [4,3,7,5,2];
abc(ghi);



//Zadanie 7
//Posortuj tablicę przekazaną jako parametr do funkcji. Wypisz ją w konsoli


function abc(def) {
    def.sort();
    console.log(def);
}

let ghi = [2,1,7,4,8,9,3,6,5];
abc(ghi);




//Zadanie 8
//Napisz funkcję która będzie zwracać tablicę która będzie sumą indeksów dwóch tablic przekazanych jako parametry funkcji.


function abc(arA, arB){
    let sum = [];

    arA.forEach((element, i) => {
        sum.push(element + arB[i]);
    });

    console.log(sum);
}

abc([1,4,6,7,5], [3,8,2,7,4]);






//Zadanie 9
//Napisz funkcję która przyjmuje jako parametr tablicę z numberami a następnie zwraca nową tablicę na podstawie parametru gdzie każdy element tablicy ma odwrotny znak.


function abc(a){
    console.log(a.map(i => i * -1));
}

abc([3,6,32,78,2]);
