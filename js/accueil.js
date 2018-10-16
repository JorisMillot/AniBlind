function displayGame(){
    document.getElementById("rules").style.display = "none";
    document.getElementById("game").style.display = "block";
    nextSong();
}

function displayNextButton(){
    document.getElementById("nextButton").style.visibility = "visible";
}

function initDocument(){
    autocomplete(document.getElementById("myInput"), ["Jojo 1", "Pas Jojo", "Joja 1"]);
}
