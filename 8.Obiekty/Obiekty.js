/*ZADANIE 1. Stwórz obiekt car i dopisz do niego różne właściwości. Wypisz właściwości w konsoli.*/


let car = {
	brand: "BMW", 
	model: "Seria 1",
    version: "M135i xDrive",
    milage: "10000",
}

console.log("Marka: " + car.brand + " Model: " + car.model + " Wersja: " + car.version + " Przebieg: " + car.milage);
	


/*ZADANIE 2. Na podstawie obiektu z zadania 1 dopisz do niego metodę zmieniającą jego dowolną właściwość na podstawie parametru przekazanego z wywołania metody.*/



car.changeMilage = function (milage){
    this.milage = milage;
}
car.changeMilage(15265);
console.log("Aktualny przebieg: " + car.milage);



/*ZADANIE 3. Stwórz obiekt z metodą sumującą wszystkie liczby z tablicy podanej w parametrze w wywołaniu tej metody. Następnie metoda ta powinna zapisywać wynik we właściwości sum tego obiektu. Na koniec wypisz właściwość sum w konsoli.*/


let sum = {
    sum: 0,
    sumArr: function (array){
        this.sum = array.reduce((x, y) => x + y);
    }
};

sum.sumArr([3,7,2,8,23]);
console.log(sum.sum);





/*ZADANIE 4. Stwórz obiekt car. Następnie wypisz w konsoli informacje na jego temat na podany poniżej wzór:

name: BMW age: 12 ...

Czyli pary klucz wartość.*/

let car = {
    name: "BMW",
    age: "12",
    milage: "10000",
}

for (let key in car) {
    console.log(key + ': ' + car[key]);    
}





/*ZADANIE 5. Stwórz dowolny obiek w obiekcie car. Następnie wypisz w konsoli jego właściwości.*/


let car = {
    engine: {
        power: "306 KM",
    }
}

console.log(car.engine.power);



/*ZADANIE 6. Do obiektu car dodaj dowolną właściwość oraz metodę wypisującą w konsoli napis "Hello". Zrób to poza ciałem obiektu.*/


let car = {
    name: "Skoda",
    age: "4", 
    milage: "80000",
}

car.model = "Superb";

console.log("Name: " + car.name + " Model: " + car.model);

car.sayHello = function() {
    console.log("Hello");
}

car.sayHello()

