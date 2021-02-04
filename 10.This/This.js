/*ZADANIE 1. Utwórz 2 obiekty person i person2. Niech posiadają następujące właściwości:

Imię
Nazwisko
Wiek
Kraj
Miasto
Stwórz metody:

Która wypiszą wszystkie informacje o tej osobie
Która dodaje 1 rok do wieku za każdym jej wywołaniem
Następnie napisz kilka wywołań metody numer 2 w różnych kontekstach tak aby sprawdzić zasadę jej działania.*/


let Person1 = {
    name: "Jan",
    surname: "Kowalski",
    age: 20,
    country: "Polska",
    city: "Warszawa"
}

let Person2 = {
    name: "Marcin",
    surname: "Kieszonka",
    age: 25,
    country: "Polska",
    city: "Wrocław"
}

function write(){
    console.log(this.name+" "+ this.surname+ " "+ this.age+" "+ this.country+" "+this.city);
}

function add(){
    this.age++;
}

Person1.write = write;
Person2.write = write;
Person1.add = add;
Person2.add = add;

Person1.write();
Person1.add();
Person1.write();

Person2.write();
Person2.add();
Person2.add();
Person2.add();
Person2.add();
Person2.write();


/*ZADANIE 2. Rozszerz obiekty person i person2 z poprzedniego zadania o nowe pole typu tablicowego, które będzie przetrzymywać ulubione dania danej osoby. Następnie napisz metodę która będzie wypisywać w konsoli zawartość tego pola oraz metodę która będzie dodawać kolejne elementy do tego pola. Wszystkie te rzeczy mają znaleźć się poza pierwotnym ciałem obiektu*/



Person1.favFood = ["Rolada", " Szpinak"];
Person2.favFood = ["Pomidorowa", " Tosty"];

Person1.showfavFood = function() {console.log(this.name + ": " + this.favFood)};
Person2.showfavFood = function() {console.log(this.name + ": " + this.favFood)};

Person1.showfavFood();
Person2.showfavFood();


let addNewfavFood = function (element) {
    this.favFood.push(element);
}

Person1.addNewfavFood = addNewfavFood;
Person2.addNewfavFood = addNewfavFood;

Person1.addNewfavFood(" Kurczak");

Person1.showfavFood();




/*ZADANIE 3. Napisz kalkulator który będzie miał funkcję dodawania, odejmowania, mnożenia i dzielenia. Potrzebne metody:

Metoda zapisująca liczby a i b w kontekście obiektu
Metoda sumująca wcześniej zapisane liczby
Metoda odejmująca wcześniej zapisane liczby
Metoda mnożąca wcześniej zapisane liczby
Metoda dzieląca wcześniej zapisane liczby. Jeśli liczba b = 0 to wypisz w konsoli odpowiedni komunikat błędu.*/



function Calc(a,b){
    this.a = a;
    this.b = b;
    this.add = function (){
        return this.a + this.b;
    }

    this.sub = function () {
        return this.a - this.b;
    }

	  this.multi= function (){
        return this.a * this.b;
    }
	
    this.div = function () {
        if (this.b === 0) return "cannot divide by 0"; 
        return this.a / this.b;
    }


}

const calculator = new Calc(20,5);
console.log("Dodawanie: " + calculator.add());
console.log("Odejmowanie: " + calculator.sub());
console.log("Mnożenie: " + calculator.multi());
console.log("Dzielenie: " + calculator.div());





/*ZADANIE 4. Stwórz prosty symulator wchodzenia i schodzenia z drabiny. Potrzebne będą trzy metody. Zastanów się jakie?*/


function Ladder(steps) {
    this.steps = steps;
    this.whereami = 0;
    this.goup = () => {
        if(this.whereami > 0) {
            console.log("Najpierw zejdź z drabiny");
        } else {
            console.log("Wchodzę");
            for(var i = 0; i<=this.steps; i++) {
                console.log("Poziom " + this.whereami++);
            }
        }
      console.log(this.whereami);
    }

    this.godown = () => {
        if(this.whereami == 0) {
            console.log("Najpierw wejdź na drabinę");
        } else {
            console.log("Schodzę");
            for(var i = 0; i<=this.steps; i++) {
                console.log("Poziom " + this.whereami--);
            }
        }
    }
}

const newLadder = new Ladder(15);
newLadder.goup();
newLadder.goup();
newLadder.godown();
newLadder.godown();









