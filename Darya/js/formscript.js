'strict mode';
// document.getElementsByName('btn-submit')[0].onclick=()=> {
//     const day=+document.getElementsByName('input-day')[0].value;
//     const month=+document.getElementsByName('input-month')[0].value;
//     let output = '';
//     if ((month===3 && day<=31 && day>=21) || (month===4 && day>=1&& day<=20)){
//         output='Овен';
//     } else {
//         output='Не овен';
//     }
//     document.getElementsByName('output')[0].innerHTML = output;
// }

// // Объект
// let user={
//     name='',
//     surname='',
//     dog:{
//         name:'',
//         age=''
//     }
// }

// const str = 'Hi, '+ 'user'; // Hi, user
// document.write=(table);

// let i = 1;
// do{
//     document.write('<p>' +i+ '</p>')
//     i+=1;
// } while(i<+10);

// let i =1;
// while(i<=10){
//     document.write('<p>' +i+ '</p>')
//     i+=1;
// }

// добавлять 1 к i, пока она не станет 10
// let n = +prompt('Введите номер');
// let m = +prompt('Введите номер');
// document.write('<table border="1">');
// for(let i = 1; i<=n; i++){ 
//     document.write('<tr>');
//     for(let k = 1; k<=m; k++){
//         if((i+k)%2){
//             document.write(`<td style='background-color:red;'> ${i} * ${k} = ${i*k} </td>`);
//         } else{
//             document.write(`<td> ${i} * ${k} = ${i*k} </td>`);
//         }
//     }
//     document.write('</tr>');
// }
// document.write('</table">');


//Фибоначчи
let a = 0;
let b = 1;
let c = a+b;
let f = 0;

// while (c<=100){
//     document.write(c +'<br/>');
//     c = c + b;
//     b = a + b;
//     a = c - b;
// }

for(let n = +prompt('Введите номер'); ;){
    document.write(c +'<br/>');
    c = c + b;
    b = a + b;
    a = c - b;
    f++;
    if(f===n) break;
}
