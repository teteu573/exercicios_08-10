function inverterString(str) {
    // Divide a string em caracteres, inverte e junta novamente
    return str.split('').reverse().join('');
}

// Exemplos de uso
console.log(inverterString("hello")); // "olleh"
console.log(inverterString("JavaScript")); // "tpircSavaJ"
console.log(inverterString("12345")); // "54321"
