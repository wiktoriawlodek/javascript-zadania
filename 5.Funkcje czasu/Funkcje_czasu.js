// Zadanie 1 
//Wypisuj w konsoli co 3 sekundy napis "Cześć po raz " oraz liczbę powtóżeń. Jeśli Licznik dojdzie do 15 zatrzymaj go.


let i = 1;
    let timer = setInterval(() => {
        console.log("Cześć po raz: " + i);
        i++;
        if (i > 15) {
            clearInterval(timer);
        };
    }, 3000);

//Zadanie 2
//Po 2 sekundach od uruchomienia programu wyświetl w konsoli wszystkie elementy dowolnej tablicy. Następnie wyświetl w konsoli co 3 sekundy kolejny element tej tablicy.


let myArray =  [1, 2, 3, 4];
let myTimer = setTimeout(() => {
        for (let i = 0; i < myArray.length; i++) {
            console.log(myArray[i]);
        }
}, 2000 )

    let j = 0
    let myInterval = setInterval(() => {
        console.log(myArray[j]);
        j++;
    if (j >= myArray.length) {
        clearInterval(myInterval);
    }
    }, 3000);

    