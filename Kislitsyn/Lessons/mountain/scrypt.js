//"strict moode"
// let adultAge = 24;
// const isAdult = confirm(`is ur age more than ${adultAge}`);
// alert(isAdult);

// const age = prompt("how old are u?");
// alert(`u are  ${age} y.o`);

// const age = +prompt("how old are u?");
// if (age <= 3){
//     alert("В САД!");
// }
// else if (age <= 7){
//     alert("В ШКОЛУ!");
// }
// else if (age <= 16){
//     alert("В ШАРАГУ!");
// }
// else if (age <= 20){
//     alert("В УНИВЕР!");
// }
// else{
//     alert("НА РАБОТУ!");
// }

// const temp = +prompt("what is ur temperature?");
// if (temp < 35){
//     alert("труп!")
// }
// else if (temp <= 37){
//     alert("здоров!")
// }
// else if (temp <= 40){
//     alert("болен!")
// }
// else if (temp > 40){
//     alert("труп!")
// }

// "strict mode";
// const mounth = +prompt("В какком месяце вы родились? (ответ в цыфрах)");
// if (mounth >= 12) {
//     alert("пизда");
// } else if(mounth >= 11) {
//     alert("Скорпион");
// } else if(mounth >= 10) {
//     alert("DAF");
// } else if(mounth >= 9) {
//     alert("ADAF");
// } else if(mounth >= 8) {
//     alert("vwerESR");
// } else if(mounth >= 7) {
//     alert("ZSEBSB");
// } else if(mounth >= 6) {
//     alert("ZBSESB");
// } else if(mounth >= 5) {
//     alert("ZSEBSZTGTZS");
// } else if(mounth >= 4) {
//     alert("блядина");
// } else if(mounth >= 3) {
//     alert("ZBESZS");
// } else if(mounth >= 2) {
//     alert("ZEBSZT");
// } else if(mounth >= 1) {
//     alert("ZSTEATS");
// } else {
//     alert("ZTEZT")
// }

// "strict mode";
// const question1 = "Как называется язык разметки гипер текста?\n1.XML\n2.SGM\n3.HTML\n4.XHTML";
// const question2 = "Столица Италии?\n1.Рим\n2.Париж\n3.Луганск\n4.Киев";
// const question3 = "В чем ходил сталин?\n1.Поло\n2.Пиджак\n3.Жекет\n4.Китель";
// const question4 = "Как зовут Кенвальда?\n1.Макс\n2.Кен\n3.Славик\n4.Дима";
// const question5 = "Вам есть 18?\n1.Да\n2.Нет";
// let answer = prompt(question1);
// if (answer == 3) {
//     alert("Вы выиграли 100 грн!");
//     answer = +prompt(question2)
// }else {
//     alert("Конец игры");
// }
//     if (answer == 1) {
//         alert("Вы выиграли 200 грн!");
//     }else {
//         alert("Конец игры");
//     }
//         answer = +prompt(question3);
//     if (answer == 4) {
//         alert("Вы выиграли 1000 грн!");
//     }else {
//         alert("Конец игры");
//     }
//         answer = +prompt(question4);
//     if (answer == 1) {
//         alert("Вы выиграли 20000 грн!");
//     }else {
//         alert("Конец игры");
//     }
//         answer = +prompt(question5);
//     if (answer == 1) {
//         alert("Вы выиграли 1000000 грн!");
//     }else {
//         alert("Конец игры");
//     }

// "strict mode";
// let number = +prompt("номер билета?");
// const digit6 = number % 10;
// number = (number - digit6) / 10;
// const digit5 = number % 10;
// number = (number - digit5) / 10;
// const digit4 = number % 10;
// number = (number - digit4) / 10;
// const digit3 = number % 10;;
// const digit2 = number % 10;
// number = (number - digit3) / 10
// number = (number - digit2) / 10;
// const digit1 = number % 10;
// number = (number - digit1) / 10;
// if (digit1 + digit2 + digit3 == digit4 + digit5 + digit6){
//     alert("Lucky");
// }
// else{
//     alert("Naa");
// }

// "strict mode";
// let str=prompt("Введите слово!");
// for(let i=0; i<str.length; i++){
//     document.write(`<p>${str[i]}`);
//     for(let k=str.length; k>0; k--){
//         document.write(str[k]);
//     }
//     document.write('</p>');
// }

"strict mode"
deposit=+prompt("Внесите депозит");
while(deposit!=0){
bet=+prompt("Сделайте ставку ");
    if(bet<=deposit){
        number=+prompt(`Введите цифру от 1 до 6 на которую вы ходите поставить ${bet} грн`);
        if(number<=6 && number>=1){
            function randomInteger(min=1, max=6){
                var rand1 = min - 0.5 + Math.random() * (max - min + 1);
                rand = Math.round(rand);
                return rand;
                var rand2 = min - 0.5 + Math.random() * (max - min + 1);
                rand = Math.round(rand);
                return rand;
                var rand3 = min - 0.5 + Math.random() * (max - min + 1);
                rand = Math.round(rand);
                return rand;
            }
            if(number=rand1 || rand2 || rand3){
                deposit=deposit+bet;
                alert(`Вы выиграли ${bet*2} грн`);
            }
            if(number=rand1 && rand2 || rand1 && rand3 || rand2 && rand3){
                deposit=deposit+bet*2;
                alert(`Вы выиграли ${bet*3} грн`);
            }
            if(number=rand1 && rand2 && rand3){
                deposit=deposit+bet*3;
                alert(`Вы выиграли ${bet*4} грн`);
            }
            else{
                deposit=deposit-bet;
                alert(`Вы проиграли ${bet} грн`);
            }
            alert(`Ваш балланс равен ${deposit} грн`);
        }
        else{
            alert("Поставте сумму на число от 1 до 6");
        }
    }
    else{
        alert("Ставка не должна превышать депозит");
    }
}