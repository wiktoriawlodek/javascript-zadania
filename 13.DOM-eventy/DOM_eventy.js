/*ZADANIE 1. Stwórz następujące eventy i sprawdź co udostępnia ich obiekt event:

Kliknięcie w przycisk o id="test-event"
Ruch myszką na ekranie
Najechanie myszką na przycisk o id="test-event"
naciśnięcie klawisza na klawiaturze
scrollowanie strony w dół i w górę
zmianę tekstu w input id="input-test"*/

let button = document.querySelector('#test-event');
button.addEventListener('click', function(event){
	console.log(event.type);
});

button.addEventListener('mouseover', function(event){
	console.log(event.type);
});

addEventListener('mousemove', function(event){
	console.log(event.type);
});

addEventListener('keypress', function(event){
	console.log(event.type);
});

addEventListener('scroll', function(event){
	console.log(event.type);
});

document.querySelector('#input-test').addEventListener('change', function(event){
	console.log(event.type);
});





/*ZADANIE 2. Napisz funkcję która po kliknięciu na button id="ex2" pobierze tekst z jego data atrybutu a następnie wpisze ten tekst do spanu który jest poniżej.*/

function change(){
	const button = document.getElementById('ex2')
	button.addEventListener('click', enterText => {
		let txt = enterText.target.dataset.text;
		let sec = enterText.target.nextElementSibling;
		
		sec.innerText = txt;
	})
}


change();



/*ZADANIE 3. Napisz funkcję która po najechaniu na czerwony kwadrat zmieniu jego kolor na niebieski. Następnie po zjechaniu myszki z obszaru kwadratu zmieni się z powrotem na czerwony.*/


function switchbcg(){
	const element = document.getElementById('ex3');
	
	element.addEventListener('mouseover', (event) => {
		event.target.style.backgroundColor = 'blue';
	});
	
	element.addEventListener('mouseout', (event) => {
		event.target.style.backgroundColor = 'red';
	});
}


switchbcg();





/*ZADANIE 4. Napisz funkcję walidacyjną dla input id="input-test". Funkcja ma za zadanie sprawdzać co jest wpisane w inputa. Jeśli user wpisze jakąś cyfrę pokaż mu komunikat błędu pod inputem informujący że nie może wpisywać cyfr.*/


const info = document.querySelector('#ex3-err');
const input = document.querySelector('#input-test');
input.addEventListener('keyup',(e) => {
	const reg = /[0-9]/gm;
	const check = e.target.value.match(reg);
	if(check !== null){
		info.innerText = "Nie możesz wpisywać cyfr w tym polu!";
	}else{
		info.innerText = " ";
	}
});





/*ZADANIE 5. Napisz funkcję countera. Funkcja ma za zadanie wpisywać do spanu w divie id="ex5" numerka odpowiadającego ilości kliknięć w button id="ex5-button". Jeśli licznik dojdzie do 10 event powinien być usunięty.*/



let element = document.getElementById('ex5-button');
let counter = 0;

function counting(event) {
    document.getElementById('ex5').innerText = ++counter;

    if (counter >= 10) {
        element.removeEventListener('click', counting );        
    }
}

element.addEventListener('click', counting );



/*ZADANIE 6. Napisz funkcję która będzie obserwowac scroll strony. Jeśli scroll zjedzie poniżej 200px zmień kolor strony na czerwony. Jeśli będzie powyżej 200px niech zmieni kolor na biały.*/



document.addEventListener("scroll", function(event){
    let position = window.scrollY;

    if (position > 200) {
        document.body.style.backgroundColor = "red";
    } else {
        document.body.style.backgroundColor = "white";
    }

});




/*ZADANIE 7. Napisz obsługę kalkulatora. Dodaj odpowiednie eventy do przycisków. Wynik wyświetlaj w inpucie. Staraj się aby funkcje były reużywalne.*/



let input = document.querySelector('#calculator > input');
let eval = false;
let clear = false;

document.querySelectorAll('#calculator > div > button').forEach((element) => {
	element.addEventListener('click', (event) => {
		if (clear == true) {
			input.value = "";
			clear = false;
		}
		
		input.value = input.value + event.target.innerText;

		if (eval == true) {
			input.value = eval(input.value);
			eval = false;
			clear = true;
		}

		if (['/', '*', '+', '-'].includes(event.target.innerText)) {
			eval = true;
		}
	});
});
