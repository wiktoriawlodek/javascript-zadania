
//ZADANIE 1. Napisz funkcję która wypisuje w konsoli "Udało się!"

function hello(){
	console.log("Udało się!")
}

hello()


//ZADANIE 2. Napisz funkcję która przyjmuje dowolny parametr i wyświetla go w konsoli

function take(){
	let i = 2;
	console.log(i);
}

take()


//ZADANIE 3. Napisz funkcję która przyjmuje jako parametr tablicę a następnie zwraca ją.


const myArray = ['Tomek', 'Adam', 2, 14];
function showArray(array) {
    return array;
}

console.log(showArray(myArray));

//ZADANIE 4. Napisz funkcję która przyjmie jako argument stringa a następnie co 3 sekundy będzie go wypisywać w konsoli. Po 5 razach ma przestać wypisywanie i zwrócić do konsoli napiś "Koniec".


function showString(string) {
    counter = 0;
    let interval = setInterval(function () {
    console.log(string);
    counter++;
    if (counter === 5) {
    clearInterval(interval);
    console.log("Koniec");
    }
    }, 3000)
    }
    
    showString("Jedź");
