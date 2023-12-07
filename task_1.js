// 1. Зробіть функцію, яка приймає параметром число від 1 до 7, а повертає день тижня українською мовою

function getDayOfWeek(dayNumber) {
    const daysOfWeek = [
        'Понеділок',
        'Вівторок',
        'Середа',
        'Четвер',
        'П’ятниця',
        'Субота',
        'Неділя'
    ];

    if (dayNumber >= 1 && dayNumber <= 7) {
        return daysOfWeek[dayNumber - 1];
    } else {
        return 'Невірний номер дня';
    }
}

console.log(getDayOfWeek(3)); // Середа


