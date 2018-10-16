var difficulty = 1;
var currentSong;
var currentPlayer;
var result;

function nextSong(){
    document.getElementById("result").style.visibility = "hidden";
    currentSong = Math.floor(Math.random()*(data.length));
    playAudio(currentSong);
    document.getElementById("nextButton").style.visibility = "hidden";
}

function playAudio(songIndex){
    let player = new Audio();
    currentPlayer = player;
    var song = data[songIndex];
    var audiopath = 'src/audio/'+song.url_audio;
    player.src = audiopath;
    var timestampIndex = Math.random()*song.timestamp.length;
    timestampIndex = Math.floor(timestampIndex);
    player.currentTime = song.timestamp[timestampIndex];

    let isDone = false;

    document.getElementById("validateBtn").onclick = function(){
        validerReponse();
        isDone = true;
    }

    player.play().then(function (){
        document.getElementById("currentTime").innerText = "";
        result = setInterval(function(){document.getElementById("currentTime").innerText = 'Time : '+ (player.currentTime.toFixed(0) - song.timestamp[timestampIndex])+ ' s';},1000);
        document.getElementById("animeImageImg").style.filter = "blur(10px)";
        document.getElementById("animeImageImg").setAttribute("src","src/image/"+song.url_image);
        switch(difficulty){
            case 1: 
                setTimeout(function() { 
                    if(isDone !== true){
                        validerReponse();
                    }
                }, 30000);
                break;
            case 2: 
                setTimeout(function() { 
                    if(isDone !== true){
                        validerReponse();
                    }
                }, 20000);
                break;
            case 3: 
                setTimeout(function() { 
                    if(isDone !== true){
                        validerReponse();
                    }
                }, 10000);
                break;
        }
    });
}
