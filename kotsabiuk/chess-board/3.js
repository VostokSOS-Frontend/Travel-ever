// var input = prompt('Enter your data here? please');

// document.write(`<div class="container" id="test" style="background-color: aqua; width:500px; height:500px"><div class="circleText"></div></div>`);

// function outputText(outputTxt, radius){
//     outputTxt = outputTxt.split('');
//     classIndex = document.getElementById('test');
//     alert(classIndex);
// }

// function isNumberSimple(n){
//     for (let i = 2; i < n; i++)
//     {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// var num = +prompt("Enter number HERE");
// var answer = "";
// for (let i = 2; i <= num; i++)
// {
//     let j = 2;
//     while(j < i){
//         if (i % j === 0) { //8 % 4 = 0; 
//             break;
//         }
//         j++;
//     }
//     if ( j === i)
//     {
//     answer += `${i}, `;
//     }
// }

// document.write(`<p>${answer}</p>`);

function getInput(addinshInfo){
    var input = prompt("Enter your data here, please").length + addinshInfo;
    return input;
}
var data = "kolia";
alert( getInput(data) );
get