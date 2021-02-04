/*ZADANIE 1. Stwórz konstruktor Person z następującymi właściwościami:

Imię
Nazwisko
Wiek
Kraj
Miasto
Język

Wszystkie te właściwości powinny pochodzić z parametrów przekazanych przez użytkownika w wywołaniu konstruktora. Następnie dopisz metody które będą modyfikować wiek oraz miasto. Pamiętaj o reużywalności kodu i oszczędzaniu pamięci. Wywołaj konstruktor Person na minimum 5 różnych osobach. Następnie zmień im wiek oraz miasto i sprawdź jak zachowują się obiekty.*/




function Person (personName, personSurname, personAge, personCountry, personCity, personLanguage){
	
	this.name = personName;
	this.surname = personSurname;
	this.age = personAge;
	this.country = personCountry;
	this.city = personCity;
	this.language = personLanguage;
	
	this.changeAge = function(age){
  	this.age = age;
	}

  this.changeCity = function(city){
    this.city = city;
 	}
	
}


let persons = [
	new Person("Agnieszka", "Nowak", 23, "Polska", "Wrocław", "Polski"),
	new Person("Sophie", "Nett", 30, "Niemcy", "Berlin", "Niemiecki"),
	new Person("Alicia", "Atlichna", 25, "Rosja", "Soczi", "Rosyjski"),
	new Person("Benjamin", "Chien", 42, "Francja", "Paryż", "Francuski"),
	new Person("Simone", "Russo", 15, "Włochy", "Neapol", "Włoski"),
]

console.log(persons);

persons[0].changeAge(30);
persons[4].changeCity("Palermo");


console.log(persons[0]);
console.log(persons[4]);





/*ZADANIE 2. Stwórz konstruktor kalkulatora z czterema podstawowymi działaniami. Konstruktor powinien posiadać pamięć operacji oraz metody do odpowiednich działań. Dopisz również metodę wypisującą zawartość pamięci oraz czyszczącą zawartość pamięci kalkulatora. Stwóz na podstawie konstruktora minimum dwa niezależne kalkulatory.*/



function Calculator(add, sub, div, mul, clear) {
    this.memory = [];

    this.add = function(a,b){
        this.memory.push(`Dodawanie: ${a} i ${b} = ${a + b}`);
        return a + b;
    }

    this.sub = function(a,b){
        this.memory.push(`Odejmowanie: ${a} i ${b} = ${a - b}`);
        return a - b;
    }
    
    this.div = function(a,b){
        this.memory.push(`Dzielenie: ${a} i ${b} = ${a / b}`);
        return a / b;
    }
    
    this.mul = function(a,b){
        this.memory.push(`Mnożenie: ${a} i ${b} = ${a * b}`);
        return a * b;
    }

    this.print = function (){
        for (index in this.memory) {
            console.log(this.memory[index]);
        }
    }

    this.clear = function(){
        console.log('Czyszczenie');
        this.memory = [];
    }

}

const calculator1 = new Calculator();
const calculator2 = new Calculator();

calculator1.add(5,8);
calculator1.sub(264,153);
calculator2.div(159,42);
calculator2.mul(45,12);



calculator1.print();
calculator1.clear();

calculator2.print();
calculator2.clear();




/*ZADANIE 3. (GRA) Stwórz konstruktor z dwoma metodami. Jedna co sekundę ma zminiać zawartość pola typu number na losową liczbę z zakresu 1-10. Druga ma sprawdzać czy liczba jest większa o 5. Jeśli tak to program ma zakończyć działanie. Obie metody muszą być wywołane na różnych obiektach i wymianiać dane przy pomocy pola prototype.*/











