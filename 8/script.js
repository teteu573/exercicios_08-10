function numeroAleatorio(min, max) {
    // Garante que os argumentos são inteiros
    min = Math.ceil(min);
    max = Math.floor(max);

    // Gera um número aleatório entre min e max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Exemplos de uso
console.log(numeroAleatorio(1, 10));  // Um número aleatório entre 1 e 10
console.log(numeroAleatorio(5, 15));  // Um número aleatório entre 5 e 15
console.log(numeroAleatorio(0, 100)); // Um número aleatório entre 0 e 100