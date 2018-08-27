function power(base, expoente) {
    if (expoente == 0) return 1;
    else return base * power(base, expoente - 1);
}

console.log(power(2, 3));

function potencia(base, expoente) {
    y = 1;

    while (true) {
        t = expoente % 2;
        expoente = Math.floor(expoente / 2);
        if (t == 1) {
            y = y * base;
        }

        if (expoente == 0) {
            break;
        }

        base = base * base;
    }
    console.log(y);
}

potencia(2, 3);

console.log(Math.pow(2, 3));

// Find the balance between speed and elegance.