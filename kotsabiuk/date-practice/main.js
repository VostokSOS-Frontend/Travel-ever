function firstTask(){
    var date = new Date(2012, 1, 20, 3, 12) + "";
    alert(date);
}

function secondTask(){
    var date = new Date(2012,0,3);  // 3 января 2012
    document.getElementById("answer").innerHTML = date;
    document.getElementById("answer").innerHTML += getWeekDay(date);
    alert( getWeekDay(date) );

    function getWeekDay(date){
        var day = date.getDay();
        switch (day){
            case 1: return 'Mn';
            case 2: return 'Ts';
            case 3: return 'Wn';
            case 4: return 'Th';
            case 5: return 'Fr';
            case 6: return 'St';
            case 0: return 'Sn';
            default: return 'Not a day of week';

        }
    }
}

secondTask();