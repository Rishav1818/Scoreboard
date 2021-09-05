function sports() {
    let gamename = prompt("Enter the name of game..");
    if (gamename != null) {
        document.getElementById("gameimage").src = `https://source.unsplash.com/1200x300/?${gamename}`;
    }
}
function teamdetail() {
    let team1 = prompt("Enter the name of Team 1").toLocaleUpperCase();
    if (team1 == "") {
        document.getElementById("team1name").innerText = "TEAM 1";
    } else {
        document.getElementById("team1name").innerText = team1;
    }
    let team2 = prompt("Enter the name of Team 2").toUpperCase();
    if (team2 == "") {
        document.getElementById("team2name").innerText = "TEAM 2";
    } else {
        document.getElementById("team2name").innerText = team2;
    }
}
const value = {
    value1: 0,
    value2: 0,
}
/////// team 1 controls ///////
document.getElementById("team1+").addEventListener("click", function () {
    if (value.value1 != winningscore&&value.value2!=winningscore) {
        value.value1 += 1;
        document.getElementById("team1score").innerText = value.value1;
    } else {
        if (value.value1>value.value2) {
            alert("Team 1 won the match");
        }else{
            alert("Team 2 won the match");
        }
        document.getElementById("team1+").button.disable = true; 
    }
})
document.getElementById("team1-").addEventListener("click", function () {
    if (value.value1!=winningscore&&value.value2!=winningscore) {
        value.value1 -= 1;
    document.getElementById("team1score").innerText = value.value1;
    }else{
        if (value.value1>value.value2) {
            alert("Team 1 won the match");
        }else{
            alert("Team 2 won the match");
        }
        document.getElementById("team1-").button.disable = true;
    }
})
////////// team 2 controls ////////////
document.getElementById("team2+").addEventListener("click", function () {
    if (value.value2!=winningscore&&value.value1!=winningscore) {
        value.value2 += 1;
    document.getElementById("team2score").innerText = value.value2;
    }else{
        if (value.value1>value.value2) {
            alert("Team 1 won the match");
        }else{
            alert("Team 2 won the match");
        }
        document.getElementById("team2+").button.disable = true;
    }
})
document.getElementById("team2-").addEventListener("click", function () {
    if (value.value2!=winningscore && value.value1!=winningscore) {
        value.value2 -= 1;
    document.getElementById("team2score").innerText = value.value2;
    }else{
        if (value.value1>value.value2) {
            alert("Team 1 won the match");
        }else{
            alert("Team 2 won the match");
        }
        document.getElementById("team2-").button.disable = true;
    }
})
//////////////// reset controls /////////////////
document.getElementById("team1reset").addEventListener("click", function () {
    if (value.value1!=winningscore && value.value2!=winningscore) {
        value.value1 = 0;
    document.getElementById("team1score").innerText = value.value1;
    }else{
        if (value.value1>value.value2) {
            alert("Team 1 won the match");
        }else{
            alert("Team 2 won the match");
        }
        document.getElementById("team1reset").button.disable = true;
    }
})
document.getElementById("team2reset").addEventListener("click", function () {
    if (value.value1!=winningscore && value.value2!=winningscore) {
        value.value2 = 0;
    document.getElementById("team2score").innerText = value.value2;
    }else{
        if (value.value1>value.value2) {
            alert("Team 1 won the match");
        }else{
            alert("Team 2 won the match");
        }
        document.getElementById("team2reset").button.disable = true;
    }
})
let winningscore = 0;
document.getElementById("pushwinscore").addEventListener("click", function () {
    winningscore = parseInt(document.getElementById("winscore").value);
})
document.getElementById("resetall").addEventListener("click",function(){
    location.reload();
})
