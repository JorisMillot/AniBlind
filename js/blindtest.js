var score = 0;

function setDifficulty(){
    difficulty = parseInt(document.getElementById('difficultySelect').value);
}

function validerReponse(){
    currentPlayer.pause();
    clearInterval(result);
    document.getElementById("animeImageImg").style.filter = "blur(0px)";
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("result").innerText = 'Result : '+data[currentSong].title_en;
    displayNextButton();
}