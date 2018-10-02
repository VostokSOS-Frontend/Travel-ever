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
    document.write('Код символа' + str.charCodeAt(i))
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

// alert('\u2602')

// Каждая буква на отдельной строке

/* let str = 'text' // Каждая буква на отдельной строке
for(let i = 0; i < str.length; i++){
    document.write('<div>');
    document.write(str[i]);
    document.write('Код символа' + str.charCodeAt(i))
    document.write('</div>');
} */

/* for(let i = 0; i<65537; i++)
{
    document.write(String.fromCharCode(i));
}
 */
/* function simpleArraySum() {
    var arr= [1,2,3,4,10,11];
    let k = arr[0]+arr[1];
    let l;
    for(let i = 2; i<6; i++){
        k=k+arr[i]
    }
    return(k);
} */

/* // Alice and Bob
function aAndb(){
    a = [5,6,7];
    b = [3,6,10];
    let c=0;
    let f=0;
    if(a[0]>b[0]){
        c++
    } else if(a[0]===b[0]){
        f=f;
        c=c;
    }else{
        f++;
    }
    if(a[1]>b[1]){
        c++
    } else if(a[1]===b[1]){
        f=f;
        c=c;
    }else{
        f++;
    }
    if(a[2]>b[2]){
        c++
    } else if(a[2]===b[2]){
        f=f;
        c=c;
    }else{
        f++;
    }
    return(`${c}+${f}`)
}

aAndb() */

/* // Возведение в степень
function pow(){
    const x = +prompt('Введите число');
    let n = +prompt('Введите степень');
    let k = x;
    for(let i = 2;i<n+1;i++){
        k=k*x;
    }
    return(alert(k))
}pow() */

/* toDoList.forEach(function (element){ // Ф-ия вызывается для каждого элемента, аналог цикла for для э-тов функции
    document.write('<p>'+element+'</p>');
})*/

/* let task = prompt('Введите дело');
if(task!=''){
    addItem(task);
} */


// Список дел

// localStorage["localToDoList"] = localStorage["localToDoList"] || "";
// let toDoList = [];
// if (localStorage["localToDoList"] !== '') {
//     toDoList = localStorage.getItem("localToDoList").split(',');
// }

// output()

// function output(){
//     let html = '<ol>'; // Вывести в начале

//     for(let i = 0; i < toDoList.length; i++){
//         html = html + '<li>' + toDoList[i] + ' <button onclick="removeItem('+ i +')" id="xbutton">X</button></li>';
//     } // Вывести все занесенные пользователем дела

//     html = html + '</ol>'; // Вывести в конце
//     document.getElementById('idoutput').innerHTML = html; // Значение из переменной html вставится внутрь э-нта с id 'output'
// } 

// function addItem(item) {
//     if(item!=''){
//     toDoList.push(item);// Добавить новое дело в конец массива
//     localStorage.setItem("localToDoList"/* Ключ */, toDoList.toString()/* Значение */);
//     output();
//     }
// }

// function removeItem(i){
//     toDoList.splice(i, 1);
//     localStorage.setItem("localToDoList", toDoList.toString());
//     output();
// }

// function createItem(){
//     addItem(document.getElementById('addTaskArea').value);
//     document.getElementById('addTaskArea').value='';
//     output();
// }

// function removeAll(){
//     toDoList.splice(0, toDoList.length);
//     localStorage.clear('localToDoList');
//     output();
// }

// document.getElementById('addTaskArea').onkeyup = function ekey(e) { // Отправка по энтеру
//     e=e || window.event
//     if (e.keyCode === 13) {
//         createItem();
//                 }
// }


// Палиндромы

/* palindrom();

function palindrom(){

// Первый блок переменных
let word = prompt('Введите слово');
let wordArr;

// Проверка переменной word на наличие значения
if(word !== ''){
    wordArr = word.split('');
} else if(word == ''){
    while(word==''){
        word = prompt('Введите слово');
        if(word!==''){
            wordArr = word.split('');
            break;
        }
    }
}

// Второй блок переменных
let i = 0;
let k = wordArr.length - 1 ;
let phrase;

// Является ли значение word палиндромом
word: while(i < wordArr.length){
    if(wordArr[i] == wordArr[k]) {
        i++;
        k--;
        phrase = 'Палиндром';
    }
    if(wordArr[i] !== wordArr[k]){
        phrase = 'Не палиндром';
        break word;
    }
}

// Вывод
alert(phrase);

palindrom();
} */

/* let str=prompt('1')
let arr = str.split('');
let sum=0;
let k;
for(let i = 0; i<arr.length;i++){
    if(arr[i]>0){
        k=arr[i];
        sum=sum+k;
    } 
}
alert(sum) */

/* let arr = [-1,-2,-3,-4,-5,-6];
let n = arr.length-1;
let k = 0;
for(let i = 0; i<arr.length;i++){
    if(arr[i]<0){
        k++;
    }
}
if(k-1==n){
    alert('theres nothing to sum');
}
 */

/*  let str = prompt('Введите строку из чисел');
 let arr = str.split('');
    for(let i = 0; i<arr.length;i++){
        if(arr[i]<=5){
            arr[i]=0;
        } else{
            arr[i]=1;
        }
    }
 alert(arr); */

//Инициалы
/*  let name=prompt('Enter your name');
 let nameArr=name.split(' ')
 let name1=nameArr[0];
 let name2=nameArr[1];
 let name11=name1.split('');
 let name22=name2.split('');
 alert(name11[0]+'.'+ name22[0]); */

// Среднее арифметическое
/* let str = prompt('Введите свои оценки')
let arr = str.split(' ');
let sum=0;
let k;
let average;
for(let i = 0; i<arr.length;i++){
        k=+arr[i];
        sum=sum+k;
} 
average = sum/arr.length;
alert(Math.round(average)); */


/* // Реверс слов в строке, в которых больше 5 букв

let str = 'Hey fellow warriors';
let splitArr = str.split(' ');
let reverse = [];
let notReverse=[];
// Сортировка по массивам
for(let i = 0; i<splitArr.length;i++){
    let arrLength = splitArr[i];
    if (arrLength.length>=5){
        reverse.push(splitArr[i]);
    }else{
        notReverse.push(splitArr[i]);
    }
}

//reverse: ["world", "explode"]
let string = reverse.join(' '); // Объединение 
let arr = string.split('')
arr.reverse()
let newString = arr.join('')
let newArr = newString.split(' ')
newArr.reverse()
let finalString = newArr.join(' ')
alert(notReverse.join(' ')+' '+finalString)
// Неточно работает, переписать. Принцип как у задания с 0 и 1 */


/*  let phrase = 'hello dearest friends';
 let phraseArr = phrase.split(' ');
 let string;
 let i;
 let finalArr=[];
 for (let firstNumber = 0; firstNumber < phraseArr.length; firstNumber++) {
     if (phraseArr[firstNumber].length >= 5) {
         string = phraseArr[firstNumber];
         let secondNumber = string.length - 1;
         let saveVar = string[firstNumber];

         string[firstNumber] = string[secondNumber];
         string[secondNumber] = saveVar;
         secondNumber--;
         finalArr.push(string)
     } else{
         finalArr.push(string)
     }
 }
 alert(finalArr.join(' ')) */

/*     function reverse(value){
    let phrase = value;
    let phraseArr = phrase.split(' ');
    
    let i;
    let finalArr=[];
    let string=[];
    for (let firstNumber = 0; firstNumber < phraseArr.length; firstNumber++) {
        if (phraseArr[firstNumber].length >= 5) {
            string = [phraseArr[firstNumber]];
            let str = string.join()
            string = str.split('');
            string.reverse()
            finalArr.push(string.join(''))
        } else{
            finalArr.push(phraseArr[firstNumber])
        }
    }
    return(finalArr.join(' '))
}
 */

// let aPerson = { // единичный объект
//     name: 'John', // свойство объекта
//     age: '111',
// }
// function person(name, age) { // конструктор типа
//     this.name = name,
//         this.age = age;
//     return name + age;
// }

// let p1 = new person('amy', 96); // экземпляр типа person


// function pet(spiece, name) {
//     this.spiece = spiece,
//         this.name = name,
//         this.changeName = function (newName) { // метод
//             this.name = newName;// ф-ию можно определить вне конструктора
//         }
// }

// var myPet = new pet('cat', 'Catlord');
// myPet.changeName('Guy');
// //document.write(myPet.name);

// function myFamily(mom, dad) {
//     this.mom = mom;
//     this.dad = dad;
//     this.relations = relationsFunction;
// }
// function relationsFunction() {
//     if (this.mom.length >= this.dad.length) {
//         return 'good';
//     } else {
//         return 'bad'
//     }
// }

// //document.write(member.relations());// писать () при вызове метода


// function grow(x) {
//     let multiply = 1;
//     for (let i = 0; i < x.length; i++) {
//         multiply = multiply * x[i];
//     }
//     return multiply;
// }

// grow([2, 2, 2]);


// // МЕТОДЫ ПЕРЕБОРА МАССИВА

// // перебор значений массива вместо цикла for
// let arr = [-1, -2, -3, 5, 6, 0];
// arr.forEach(function (item, i) {
//     document.write('<p>' + 'forEach ' + i + ': ' + item + '</p>');
// })

// // создается новый массив, в который войдут только те элементы старого массива, для которых ф-ия возвратит true
// let arr2 = [-1, -2, -3, 5, 6, 0];
// let newArr = arr2.filter(function (number) {
//     return number > 0;
// })
// document.write('<p>' + 'filter: ' + newArr + '</p>');

// // создается новый массив, в который входят элементы старого, пропущенные через ф-ию
// let mapArr = [2, 4, 6, 8];
// let doubleMap = mapArr.map(function (number) {
//     return number * 2;
// })
// document.write('map: ' + doubleMap);

// // проверка массива
// let arr3 = [-1, -2, -3, 5, 6, 0];
// document.write('<p>' + 'every: ' + arr3.every(function isPositive(num) {
//     return num > 0;
// }) + '</p>')// false, не все положительные

// document.write('<p>' + 'some: ' + arr3.some(function isPositive(num) {
//     return num > 0;
// }) + '</p>') // true, есть хоть одно положительное

// // свертка массива, пропуск каждого э-та справа налево через ф-ию, сохраняя промежуточный результат
// // reduceRight идет слева направо
// let arr4 = [1, 2, 3, 4];
// let sumArr4 = arr4.reduce(function (previousValue, currentValue) {
//     return previousValue + currentValue;
// });
// document.write('reduce: ' + sumArr4);