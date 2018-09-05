function game(){
    let dep = +prompt('Введите депозит');
    if (dep===0){
        return('Вы закончили игру');
    } else{
        makeBet();
    }

    function makeBet(){
    let bet = +prompt('Введите ставку');
    if(bet>dep){
        alert('Ваша ставка не должна быть больше депозита');
        makeBet();
    } else if (bet===0){
        alert('Вы забрали депозит и закончили игру');
    } else{
        getRandomNumber();
    }

    function getRandomNumber() {
        let number = +prompt('Введите цифру от 1 до 6, на которую вы хотите сделать ставку');

        if(number<1||number>6){
            alert('Введите цифру от 1 до 6');
            let number = +prompt('Введите цифру от 1 до 6, на которую вы хотите сделать ставку');
        }

        const a = Math.floor(Math.random() * 6) + 1;
        const b = Math.floor(Math.random() * 6) + 1;
        const c = Math.floor(Math.random() * 6) + 1;
        
        if(number===a && number!=b && number!=c || number===b && number!=a && number!=c|| number===c && number!=b && number!=a){
            alert('Ваша цифра совпала с одной из выпавших на костях. Вы получаете выигрыш, равный размеру ставки');
            dep=dep+bet;
            alert('Ваш депозит: '+ dep);
            makeBet();
        } else if(number===a && number===b && number!=c|| number===b && number===c && number!=a|| number===c && number===a && number!=b){
            alert('Ваша цифра совпала с двумя из выпавших на костях. Вы получаете выигрыш, равный двойному размеру ставки');
            dep=dep+bet*2;
            alert('Ваш депозит: '+ dep);
            makeBet();
        } else if(number===a && number===b && number===c){
            alert('Ваша цифра совпала с тремя из выпавших на костях. Вы получаете выигрыш, равный тройному размеру ставки');
            dep=dep+bet*3;
            alert('Ваш депозит: '+ dep);
            makeBet();
        } else if (number!=a && number!=b && number!=c){
            alert('Ваша цифра не совпала ни с одной из выпавших на костях. Вы теряете свою ставку');
            dep=dep-bet;
            alert('Ваш депозит: '+ dep);
            makeBet();
        }
      }
}
return('Игра окончена');
}
alert(game());