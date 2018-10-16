function setDifficulty(){
    difficulty = parseInt(document.getElementById('difficultySelect').value);
}

function validerReponse(){
    player.pause();
    document.getElementById("animeImageImg").style.filter = "blur(0px)";
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("result").innerText = 'Result : '+data[currentSong].title_en;
    displayNextButton();
}