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
    
    if(localStorage.getItem('AniBlindRank') === null){
        localStorage.setItem('AniBlindRank',0);
    }else{
        document.getElementById("rank").innerHTML = 'Your best score : ' + localStorage.getItem('AniBlindRank');
    }
}

function loadAutoComplete(){
    return new Promise(function(succes){
        var animeList = new Array();
        data.forEach(function(value, key){
            animeList.push(value.title_en);
            if(value.title_jp !== value.title_en)
                animeList.push(value.title_jp);        
        });
        succes(animeList);
    });
}
