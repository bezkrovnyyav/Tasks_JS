// 3. Створіть функцію, яка заповнюватиме масив 10-ма іксами за допомогою циклу.

function fillArrayWithX() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push('x');
    }
    return arr;
}

console.log(fillArrayWithX());
