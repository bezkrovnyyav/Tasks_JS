/*
7. Написати функцію яка розбиває масив на підмасиви  за заданим розміром. 
Приклад ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
*/

function chunkArray(array, size) {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
        chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
}

console.log(chunkArray([1, 2, 3, 4, 5], 2)); // [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
