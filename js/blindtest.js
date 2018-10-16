var score = 0;

function setDifficulty(){
    difficulty = parseInt(document.getElementById('difficultySelect').value);
}

function validerReponse(){
    currentPlayer.pause();
    var playerResponse = document.getElementById('myInput').value;
    document.getElementById('myInput').value = '';
    if(playerResponse === data[currentSong].title_en || playerResponse === data[currentSong].title_jp){
        score+= 10;
        document.getElementById("score").innerText = score+' points';
    }
    document.getElementById("animeImageImg").style.filter = "blur(0px)";
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("result").innerText = 'Result : '+data[currentSong].title_en;
    displayNextButton();
}