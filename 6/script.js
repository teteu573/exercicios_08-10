function contarVogais(str) {
    // Define as vogais
    const vogais = 'aeiouAEIOU';
    let contador = 0;

    // Percorre cada caractere da string
    for (let char of str) {
        // Verifica se o caractere é uma vogal
        if (vogais.includes(char)) {
            contador++;
        }
    }

    return contador;
}

// Exemplos de uso
console.log(contarVogais("Olá, mundo!")); // 4
console.log(contarVogais("Javascript")); // 3
console.log(contarVogais("Contagem de vogais")); // 7
console.log(contarVogais("12345")); // 0