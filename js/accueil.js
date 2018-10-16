function displayGame(){
    document.getElementById("rules").style.display = "none";
    document.getElementById("game").style.display = "block";
    nextSong();
}

function displayNextButton(){
    document.getElementById("nextButton").style.visibility = "visible";
}