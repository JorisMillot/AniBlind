function displayGame(){
    document.getElementById("rules").style.display = "none";
    document.getElementById("game").style.display = "block";
    nextSong();
}

function displayNextButton(){
    document.getElementById("nextButton").style.visibility = "visible";
}

function initDocument(){
    loadAutoComplete().then(function (data){
        autocomplete(document.getElementById("myInput"), data);
    });
}

function loadAutoComplete(){
    return new Promise(function(succes){
        var animeList = new Array();
        data.forEach(function(value, key){
            animeList.push(value.title_en);
            animeList.push(value.title_jp);            
        });
        succes(animeList);
    });
}
