function ehPalindromo(str) {
    // Remove espaços e converte para minúsculas
    const palavraLimpa = str.replace(/\s+/g, '').toLowerCase();
    
    // Verifica se a palavra é igual ao seu reverso
    const palavraReversa = palavraLimpa.split('').reverse().join('');
    
    return palavraLimpa === palavraReversa;
}

// Exemplos de uso
console.log(ehPalindromo("arara")); // true
console.log(ehPalindromo("banana"));   // false
console.log(ehPalindromo("A man a plan a canal Panama")); // true