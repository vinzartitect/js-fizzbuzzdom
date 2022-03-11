// milestone 1 script di prova in console log 

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {

         console.log("FizzBuzz");

    } else if (i % 3 === 0) {

        console.log("Fizz");

    } else if (i % 5 === 0 ) {

        console.log("Buzz");

    } else {

        console.log(i);

    }

};



// milestone 2 script di prova con elementi html aggiunti 

// seleziono il container dove poi vanno i quadrati numerati
let containerNumeri = document.querySelector(`.container_numeri`)

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {

        containerNumeri.innerHTML += `<div class="box_quadrato fizzbuzz">fizzbuzz</div>`;

    } else if (i % 3 === 0) {

        containerNumeri.innerHTML += `<div class="box_quadrato fizz">fizz</div>`;

    } else if (i % 5 === 0 ) {

        containerNumeri.innerHTML += `<div class="box_quadrato buzz">buzz</div>`;

    } else {

        containerNumeri.innerHTML += `<div class="box_quadrato">${i}</div>`;

    }

};

// milestone 3 stili aggiunti precedentemente ad ogni condizione