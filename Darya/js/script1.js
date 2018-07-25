'strict mode';

let number = +prompt('Введите номер вашего билета');

const d6 = number % 10;
number=(number-d6)/10;
const d5 = number % 10;
number=(number-d5)/10;
const d4 = number % 10;
number=(number-d4)/10;
const d3 = number % 10;
number=(number-d3)/10;
const d2 = number % 10;
number=(number-d2)/10;
const d1 = number % 10;
number=(number-d1)/10;
if(d1+d2+d3===d4+d5+d6){
    alert('Счастливый');
} else{
    alert('Обычный');
}

// const tmp = +prompt('Ваша температура');
// if (tmp<37 && tmp>35){
//     alert('Вы здоровы');
// } else if(tmp<=40 && tmp>35){
//     alert('Вы больны');
// } else if(tmp>40){
//     alert('Вы мертвы');
// } else if(tmp<35){
//     alert('Вы мертвы');
// }

// Знаки зодиака
// const mnth = +prompt ('Месяц вашего рождения')
// const date = +prompt ('Число вашего рождения')
if ((mnth===3 && date<=31 && date>=21) || (mnth===4 && date>=1&& date<=20)){
    alert('Овен');
} else if((mnth===4 && date<=31 && date>=21) || (mnth===5 && date>=1 && date<=20)){
    alert('Телец');
} else if((mnth===5 && date<=31 && date>=21) || (mnth===6 && date>=1 && date<=21)){
    alert('Близнецы');
} else if((mnth===6 && date<=31 && date>=22) || (mnth===7 && date>=1  && date<=22)){
    alert('Рак');
} else if((mnth===7 && date<=31 && date>=23) || (mnth===8 && date>=1&& date<=23)){
    alert('Лев');
} else if((mnth===8 && date<=31 && date>=24) || (mnth===9 && date>=1&& date<=23)){
    alert('Дева');
} else if((mnth===9 && date<=31 && date>=24) || (mnth===10 && date>=1&& date<=21)){
    alert('Весы');
} else if((mnth===10 && date<=31 && date>=24) || (mnth===11 && date>=1&& date<=21)){
    alert('Скорпион');
} else if((mnth===11 && date<=31 && date>=23) || (mnth===12 && date>=1&& date<=21)){
    alert('Стрелец');
} else if((mnth===12 && date<=31 && date>=22) || (mnth===1 && date>=1&& date<=20)){
    alert('Козерог');
} else if((mnth===1 && date<=31 && date>=21) || (mnth===2 && date>=1&& date<=20)){
    alert('Водолей');
} else if((mnth===2 && date<=31 && date>=21) || (mnth===3 && date>=1&& date<=20)){
    alert('Рыбы');
}

// Как стать миллионером
// const q1 = '1?\n 1.1\n 2.2\n 3.3\n 4.4';
// let answ = +prompt(q1);
// const q2 = '2?\n 5.5\n 6.6\n 7.7\n 8.8';
// const q3 = '3?\n 5.5\n 6.6\n 7.7\n 8.8';
// const q4 = '4?\n 5.5\n 6.6\n 7.7\n 8.8';
// const q5 = '5?\n 5.5\n 6.6\n 7.7\n 8.8';
// if (answ === 5.5){
//     alert('Верно');
//     answ = +prompt(q2)
//     if (answ === 5.5){
//         alert('Верно')
//         answ = +prompt (q3)
//         if (answ===5.5){
//             alert('Верно')
//             answ = +prompt (q4)
//             if (answ===5.5){
//                 alert('Верно')
//                 answ = +prompt (q5)
//                 if (answ===5.5){
//                     alert('Вы победили!')
//                 } else {
//                     alert('Неверно')
//                 }
//             } else{
//                 alert('Неверно')
//             }
//         } else {
//              alert('Неверно') 
//         }
//     } else{
//         alert('Неверно')
//     }
// }  else {
//     alert('Неверно')
// }
