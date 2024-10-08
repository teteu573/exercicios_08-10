function media (num1, num2, num3){
    let soma = num1 + num2 + num3;
    let media = soma / 3;
    return Math.round (media * 100) / 100;
}

console.log(media(4,6,8)); //6
console.log(media(10, 20, 30)); // 20