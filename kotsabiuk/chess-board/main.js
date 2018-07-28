// document.write('<table border="2">');
// for (let i = 1; i < 10; i++)
// {
//     document.write('<tr>');
//     for(let j = 1; j <= 10; j++)
//     {
//         if ((i + j) % 2){
//             document.write(`<td style="background-color: gray;"> ${i} * ${j} = ${i * j} </td>`);
//         }
//         else{
//             document.write(`<td> ${i} * ${j} = ${i * j} </td>`);
//         }
//     }
//     document.write('</tr>');
// }
// document.write('</table>')

// var num = Number(prompt('Введіть число Фібоначчі'));
// while(isNaN(num))
// {
    
//     num = prompt('Введіть число Фібоначчі');
    
// }
// let f1 = 1;
// let f2 = 1;
// let answer = 0;

// if ( num === 1 ||  num === 2) document.write('1');
// else {
// for (let i = 2; i < num; i++)
//         {
//             answer = f1 + f2;
//             f1 = f2;
//             f2 = answer;
//         }
//         document.write(answer);
//     }

function getTableHtmlCode(rows, cols){
    
    let htmlTableString = `<table border = "2">`;
    for (let i = 0; i < rows; i++){
        htmlTableString += '<tr>'
        for (let j = 0; j < cols; j++){
            htmlTableString += '<td>';
            htmlTableString += `${i + 1} * ${j + 1} = ${(i + 1) * (j + 1)}`;
            htmlTableString += '</td>';
        }
        htmlTableString += '</tr>'
    }
    htmlTableString = htmlTableString + `</table>`;
    return htmlTableString;
}
var r = 10;
var c = 5;
document.write(getTableHtmlCode(r, c));
document.write( getTableHtmlCode(10, 5));
document.write( getTableHtmlCode(9, 7));
document.write( getTableHtmlCode(15, 6));


function min(first, second){
    return first < second ? first : second;
}

function max(first, second){
    return first > second ? first : second;
}