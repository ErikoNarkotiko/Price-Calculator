function calculate() {
    // Pobranie wartości z formularza
    let price_begin = parseFloat(document.getElementById('price').value);
    let obnizka = parseFloat(document.getElementById('discount').value) / 100;
    let vat = parseFloat(document.getElementById('tax').value);

    // Sprawdzenie, czy cena została wprowadzona i czy jest poprawną liczbą
    if (isNaN(price_begin) || price_begin < 0) {
        alert("Proszę wpisać poprawną cenę początkową!");
        return;
    }

    // Zabezpieczenie przed pustym/błędnym rabatem
    if (isNaN(obnizka)) {
        obnizka = 0;
    }

    // Obliczenia
    let cena_po_rabacie = price_begin - (price_begin * obnizka);
    let kwota_podatku = cena_po_rabacie * (vat / 100);
    let cena_koncowa = cena_po_rabacie + kwota_podatku;

    // Wpisanie wyniku do pola <input> z zaokrągleniem do 2 miejsc po przecinku
    document.getElementById("final-price").value = cena_koncowa.toFixed(2) + " PLN";
}