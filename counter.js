const increasbtn = document.getElementById("up");
const Decreasbtn = document.getElementById("down");
const resetbtn = document.getElementById("restbtn");
const countlabel = document.getElementById('set');
let count = 0 ;
increasbtn.onclick = function(){
        count++;
        countlabel.textContent=count;
}
Decreasbtn.onclick = function(){
    count--;
    countlabel.textContent=count;
}

resetbtn.onclick = function(){
    count=0;
    countlabel.textContent=count;
}


