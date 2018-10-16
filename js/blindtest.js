var score = 0;

function setDifficulty(){
    difficulty = parseInt(document.getElementById('difficultySelect').value);
}

function validerReponse(){
    currentPlayer.pause();
    document.getElementById("myInput").disabled=true;
    var playerResponse = document.getElementById('myInput').value;
    document.getElementById('myInput').value = '';
    if(playerResponse === data[currentSong].title_en || playerResponse === data[currentSong].title_jp){
        score+= 10;
        document.getElementById("score").innerText = score+' points';
        document.getElementById("resultText").innerHTML = "Right ! 10 point earned."
    }else if(playerResponse === ""){
        document.getElementById("resultText").innerHTML = "Wrong ! You forgot to choose a response. 0 point earned."
    }else{
        document.getElementById("resultText").innerHTML = "Wrong ! 0 point earned."
    }

    clearInterval(result);
    document.getElementById("animeImageImg").style.filter = "blur(0px)";
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("result").innerText = 'Result : '+data[currentSong].title_en;
    displayNextButton();

    if(score > localStorage.getItem('AniBlindRank')){
        localStorage.setItem('AniBlindRank',score);
    }

}