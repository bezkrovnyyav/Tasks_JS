/*
6. Написати функцію яка порівнює два масиви, якщо вони ідентичні тоді повертаємо true інакше false
*/

function compareArrays(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }

    return true;
}

console.log(compareArrays([1, 2, 3], [1, 2, 3])); // true
console.log(compareArrays([1, 2, 3], [1, 2, 5])); // false
