function setDifficulty(){
    difficulty = parseInt(document.getElementById('difficultySelect').value);
}

function validerReponse(){
    player.pause();
    //afficher réponse
    document.getElementById("animeImageImg").style.filter = "blur(0px)";
    document.getElementById("result").style.display = "visible";
    displayNextButton();
}