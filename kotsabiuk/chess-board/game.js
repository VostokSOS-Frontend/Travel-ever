function game(){
    do{
        var deposite = getDeposite();

    } while (deposite > 0)
    // alert(deposite);
}

function getDeposite(){
    return +document.getElementById("deposite").value;
}

function insertScore(deposite){
    document.getElementById("score").innerHTML = "Your score: " + deposite; 
}

