// Cerco lo schermo su HTML
const inputValue = document.getElementById("user-input");

// Gestione operatori
// Cerco gli operatori nel file HTML
const calculate = document.querySelectorAll(".operations").forEach(function (item) {
    // Aggiungo l'evento al click ai pulsanti delle operazioni
    item.addEventListener("click", function (e) {

        // Creo una variabile per l'ultimo valore (se inseriamo nella calcolatrice un numero e un operatore, premendo "=" non darà nessun errore)
        let lastValue = inputValue.innerText.substring(
            inputValue.innerText.length,
            inputValue.innerText.length - 1
        );

        // Condizioni
        // Se il valore su schermo è un numero e viene premuto il tasto "="
        if (!isNaN(lastValue) && e.target.innerHTML === "=") {
            //Esegui l'operzaione
            inputValue.innerText = eval(inputValue.innerText);
            // Altrimenti se premo il pulsante "C"
        } else if (e.target.innerHTML === "C") {
            // Resetta il valore a 0
            inputValue.innerText = 0;
            // Se il valore è gia a zero
            if (inputValue.innerText.length == 0) {
                // quest'ultimo rimarrà zero
                inputValue.innerText = 0;
            }
            // Altrimenti 
        } else {
            // se il valore è un numero
            if (!isNaN(lastValue)) {
                //inserisci l'operatore premuto
                inputValue.innerText += e.target.innerHTML;
            }
        }
    });
});

// Cerco i numeri nel file HTML
const number = document.querySelectorAll(".num-btn").forEach(function (item) {
    // Aggiungo l'evento al click ai pulsanti dei numeri
    item.addEventListener("click", function (e) {
        // Se il valore su schermo è zero
        if (inputValue.innerText === "0") {
            // Sovrascrive con una stringa vuota (senza questo, all' inserimento di un numero comparirà uno zero davanti al primo numero selezionato)
            inputValue.innerText = "";
        }
        // Per aggiungere gli elementi a schermo ed evitare, tramite .trim, possibili spazi
        inputValue.innerText += e.target.innerHTML.trim();
    });
});