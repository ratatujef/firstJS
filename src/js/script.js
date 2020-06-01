'use strict';

let money = +prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце'),
        b = prompt('Во сколько обойдется');

    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
        console.log('Done');
        appData.expenses[a] = b;
    } else {

        console.log('Bad Data');
    }
}

// еще один вариант цикла
// let cases = 0;
// while (cases < 2) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце'),
//         b = prompt('Во сколько обойдется');

//     if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log('Done');
//         appData.expenses[a] = b;
//     } else {

//         console.log('Bad Data');
//     }
//     cases++;
// };

// еще один вариант
// do {
//     let a = prompt('Введите обязательную статью расходов в этом месяце'),
//         b = prompt('Во сколько обойдется');

//     if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log('Done');
//         appData.expenses[a] = b;
//     } else {

//         console.log('Bad Data');
//     }
//     cases++;
// } while (cases < 2);

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 500) {
    console.log('Достаток ниже среднего');
} else if (appData.moneyPerDay < 1000 && appData.moneyPerDay > 500) {
    console.log('Средний достаток');
} else {
    console.log('Состоятельный');
}
