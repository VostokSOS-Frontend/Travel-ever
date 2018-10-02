let div=document.body;

function sum(){
    let first = document.getElementById("num1");
    let num1=+first.value;
    let second = document.getElementById("num2");
    let num2=+second.value;
    sum = document.createElement("div");
    let summa = num1 + num2;
    sum.innerHTML = "Сумма = " + summa;
    sum.className = "sum";
    div.appendChild(sum);
}