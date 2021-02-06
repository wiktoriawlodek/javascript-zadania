/*ZADANIE 1. Stwórz funkcję do której przekażesz jako parametr listę elementów o klasie more-divs. Następnie zwróć z tej funkcji tablicę tagów utworzoną na podstawie przekazanego parametru. Wynik wyświetl w konsoli.*/

const divs = document.querySelectorAll('.more-divs');

function listOfDivs(paramArr) {
    let newArray = [];
    
    for (let i = 0; i < paramArr.length; i++) {
        newArray.push(paramArr[i].tagName);
    }
    return newArray;
}

console.log(listOfDivs(divs));





/*zadanie 2. Stwórz funkcję i przekaż do niej jako parametr element short-list. Następnie wyświetlw konsoli:

a) Kod html wewnętrzny
b) kod html zewnętrzy
c) listę klass elementu w postaci stringu
d) listę klass elementu w postaci tablicy
e) obiekt dataset*/


function task2(param){
    //a
    console.log(param.innerHTML);
    //b
    console.log(param.outerHTML);
    //c
    console.log(param.className);
    //d
    console.log([param.classList]);
    //e
    console.log(param.dataset);

}

task2(document.querySelector(".short-list"));






/*ZADANIE 3. Stwórz funkcję która zwracać będzie wynik dodawania oraz odejmowania liczb pobranych z przekazanych parametrów. Liczby te muszą pochodzić z atrybutów data elementu o id datasetCheck*/

const numbersDataset = document.getElementById('datasetCheck');
const thirdTask = takeNumbers => {
    const firstNumber = parseInt(takeNumbers.dataset.numberone)
    const secondNumber = parseInt(takeNumbers.dataset.numbertwo)
    const thirdNumber = parseInt(takeNumbers.dataset.numberThree)
    let adding = firstNumber + secondNumber + thirdNumber
    let substraction = firstNumber - secondNumber - thirdNumber;
    return [adding, substraction];
}
console.log(thirdTask(numbersDataset));

//ZADANIE 4. Zmień tekst w elemencie o id spanText na dowolny

document.getElementById("spanText").innerText =  "dowolny";

//ZADANIE 5. Zmień klasę elementowi o id spanText na dowolną

document.getElementById("spanText").className =  "dowolna";






/*ZADANIE 6. Napisz funkcję która przyjmie jako parametr listę klass elementu o id classes. Następnie funkcja powinna wypisać w konsoli pojedynczo wszystkie klasy a na końcu wyświetlić string z połączonych klass znakiem '+'. Następnie usuń wszystkie klasy temu elementowi i wypisz w konsoli tekst: "Usunięto wszystkie klasy".*/

function printClassesAndRemove(classes) {
    classes.forEach(v => console.log(v));
    console.log([...lasses].join('+'));
      document.getElementsByClassName(classes.value)[0].classList = [];

    console.log('Usunięto wszytskie klasy');
}

printClassesAndRemove(document.getElementById('classes').classList);





/*ZADANIE 7. Znajdź wszystkie elementy li w elemencie longList. Przekaż te elementy do funkcji której zadaniem będzie dodanie każdemu elementowi li atrybutu data-text="text" ale tylko tym elementom w których taki data atrybut nie istnieje.*/


var liElements = document.querySelector('#longList').querySelectorAll('li');
liElements.forEach((c) => {
  if(c.dataset.text == null) c.setAttribute("data-text", "text");
});





/*ZADANIE 8. Napisz funkcję która będzie przyjmować parametr typu string. Następnie string ten zapisz w postaci obiektu:

{ newClass: 'string_z_parametru' }

Obiekt ten przekaż do drugiej funkcji w której odczytasz string z obiektu i przypisz go do zmiennej. Następnie ustaw taką klasę elementowi o id myDiv.*/

function task1(className) {
    let obj = {newClass: className};
    task2(obj);
}

function task2(obj) {
    let variable = obj.newClass;
    document.getElementById('myDiv').className = variable;
}

task1('string_z_parametru');




/*ZADANIE 9. Napisz funkcję która będzie dodawać odpowiednią klasę do elementu o id "numbers" w zależności od przekazanego parametru. Parametr powinien być losową liczbą z zakresu 0-10. Jeśli liczba będzie parzysta ustaw klasę 'even' jak nieparzysta 'odd;*/

function add(param){
    
    param = parseInt(param);
    const numbers = document.querySelector("#numbers");
    
    if(param %2===0){
        numbers.className = "even";
    }
    else{
        numbers.className = "odd";
    }
    
}

var randomNum = Math.floor(Math.random() * 11);
add(randomNum);





/*ZADANIE 10. Napisz funkcję do której przekaż element o id "longList". Następnie zwróć tablicę wypełnioną wartościami pobranymi z elementów ten listy.*/

function getValues(param) {
    return [...param.children].map(v => v.innerText);
  }
  console.log(getValues(document.getElementById('longList')));




/*ZADANIE 11. Napisz funkcję do której przekażesz listę dzieci elementu o id longList. Następnie zamień wszystkie wartości tych elementów na losowe liczby z zakresu 0-10 jednocześnie przechowując starą wartość w data atrybucie.*/

  function change(param) {
    [...param.children].forEach(v => {
      v.setAttribute('old-value', v.innerText);
      v.innerText = Math.floor(Math.random() * 11);
    });
  }
  change(document.getElementById('longList'));