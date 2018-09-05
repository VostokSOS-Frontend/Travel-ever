'strict mode';
/* document.getElementsByName('btn-submit')[0].onclick=()=> {
    const day=+document.getElementsByName('input-day')[0].value;
    const month=+document.getElementsByName('input-month')[0].value;
    let output = '';
    if ((month===3 && day<=31 && day>=21) || (month===4 && day>=1&& day<=20)){
        output='Овен';
    } else {
        output='Не овен';
    }
    document.getElementsByName('output')[0].innerHTML = output;
} */

/* // Объект
let user={
    name='',
    surname='',
    dog:{
        name:'',
        age=''
    }
} */

// const str = 'Hi, '+ 'user'; // Hi, user
// document.write=(table);

/* let i = 1;
do{
    document.write('<p>' +i+ '</p>')
    i+=1;
} while(i<+10); */

/* let i =1;
while(i<=10){
    document.write('<p>' +i+ '</p>')
    i+=1;
} */

// таблица умножения (функция)
/* function getTable(rows, cols){
    let htmlstring = '<table>';

    for(let i = 0; i < rows; i++){ 
        htmlstring += '<tr>'
        for(let k = 0; k < cols; k++){
            htmlstring += '<td>';
            htmlstring += `${i+1}*${k+1}= ${(i+1)*(k+1)}`
            htmlstring += '</td>';
            }
            htmlstring += '</tr>'
    }
    htmlstring = htmlstring + `<table>`;
    return htmlstring;
}
document.write(getTable(10,5)); */

// Таблица умножения
/* let n = +prompt('Введите номер');
    let m = +prompt('Введите номер'); */
/* document.write('<table border="1">');
for(let i = 1; i<=n; i++){ 
    document.write('<tr>');
    for(let k = 1; k<=m; k++){
        if((i+k)%2){
            document.write(`<td style='background-color:red;'> ${i} * ${k} = ${i*k} </td>`);
        } else{
            document.write(`<td> ${i} * ${k} = ${i*k} </td>`);
        }
    }
    document.write('</tr>');
}
document.write('</table">'); */


/* //Фибоначчи
let a = 0;
let b = 1;
let c = a+b;
let f = 0;

for(let n = +prompt('Введите номер'); ;){
    
    c = c + b;
    b = a + b;
    a = c - b;
    f++;
    if(f===n) break;
}
document.write(c +'<br/>'); */

/* let str = 'text' // Обычный вывод текста
for(let i = 0; i < str.length; i++){
    document.write(str[i]);
} */

/* let str = 'text' // Каждая буква на отдельной строке
for(let i = 0; i < str.length; i++){
    document.write('<div>');
    document.write(str[i]);
    document.write('</div>');
} */

/* let str = 'text' // Вывод каждой буквы по N раз
for(let i = 0; i < str.length ; i++){
    document.write('<div>');
    for(let k = 0; k < 10 ; k++){
        document.write(str[i]);
    }
    document.write('</div>');
} */

// let str = 'text' // Вывод текста лесенкой
// for(let i = 0; i < str.length ; i++){
//     document.write('<div>');
//     for(let k = 0; k <= i ; k++){ /* Объявление переменной, которая увеличивается на 1 значение после каждого цикла, document.write(str[i]) будет выполняться, пока значение переменной k не примет значения < i + 1 */
//         document.write(str[i]);
//     }
//     document.write('</div>');
// }

/* let str = 'text' // Строка наоборот
for(let i = str.length - 1; ; i--){
    document.write('<div>');
    document.write(str[i]);
    document.write('</div>');
    if (i===0) break;
} */

// Сумма чисел между a и b (c прогрессией)
/* let a = +prompt('Введите число 1');
let b = +prompt('Введите число 2');
let f = '';
for(let c = a; c<=b; c++){
    f= (a+b)/2*(b-a+1);
}document.write(f); */

/* // Без прогрессии
let a = +prompt('Введите число 1');
let b = +prompt('Введите число 2');
let f;
for(let c = a; c<=a ; ){
    f=c+1+c;
    c++;
    f=f+c+1;
}document.write(f); */

/* // Деление числа
let n = +prompt('Введите число N')
let m = +prompt('Введите число M')
let a = n/2;
let k = 0;
for( ; a >= m; ){
    a=a/2;
    k++
} document.write('Конечное число:'+ a)
document.write('Количество итераций:'+ k) */

/* function min(first, sec){
    if(first>sec){
        return sec;
    } else{
        return first;
    }
}
document.write(min(2,3)) */

function game(){
    let dep = +prompt('Введите депозит');
    let bet = +prompt('Введите ставку');
    //Math.random
    if(){
        
    }
}
