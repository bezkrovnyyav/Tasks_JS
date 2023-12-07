/*
5. Функція ggg приймає 2 параметри: анонімну функцію, яка повертає 3 та анонімну функцію,
яка повертає 4. Поверніть результатом функції ggg суму 3 та 4
*/

function ggg(func1, func2) {
    return func1() + func2();
}

const result = ggg(
    func1 = () => {
        return 3;
    },
    func2 =() => {
        return 4;
    }
);

console.log(result); // 7
