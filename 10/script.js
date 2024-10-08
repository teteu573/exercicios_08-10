function celsiusParaFahrenheit(celsius) {
    // Aplica a fórmula de conversão
    const fahrenheit = (celsius * (9 / 5)) + 32;
    return fahrenheit;
}

// Exemplos de uso
console.log(celsiusParaFahrenheit(0));    // 32
console.log(celsiusParaFahrenheit(100));  // 212
console.log(celsiusParaFahrenheit(-40));  // -40
