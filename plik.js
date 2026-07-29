function calculate() {
    // 1. Pobranie elementów HTML
    let priceEl = document.getElementById('price');
    let discountEl = document.getElementById('discount');
    let taxEl = document.getElementById('tax');
    let finalPriceEl = document.getElementById('final-price');

    // 2. Pobranie i walidacja ceny początkowej
    let price_begin = parseFloat(priceEl.value);
    if (isNaN(price_begin) || price_begin < 0) {
        price_begin = 0;
        priceEl.value = 0;
    }

    // 3. Pobranie i walidacja rabatu (w procentach: 0 - 99)
    let discountPercent = parseFloat(discountEl.value);
    
    if (isNaN(discountPercent) || discountPercent < 0) {
        discountPercent = 0;
        discountEl.value = 0;
    } else if (discountPercent > 99) {
        discountPercent = 99;
        discountEl.value = 99; // Zmienia wartość w polu na max 99%
    }

    // 4. Przeliczenie procentu na ułamek oraz pobranie VAT
    let obnizka = discountPercent / 100;
    let vat = parseFloat(taxEl.value);
    if (isNaN(vat)) vat = 0;

    // 5. Obliczenia
    let cena_po_rabacie = price_begin - (price_begin * obnizka);
    let kwota_podatku = cena_po_rabacie * (vat / 100);
    let cena_koncowa = cena_po_rabacie + kwota_podatku;

    // 6. Wpisanie samego wyniku do pola
    finalPriceEl.value = cena_koncowa.toFixed(2);
}