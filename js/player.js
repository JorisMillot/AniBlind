var difficulty = 1;
var currentSong;
var currentPlayer;
var result;
var i;

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

    player.play().then(function (){
        document.getElementById("currentTime").innerText = "";
        //result = setInterval(function(){document.getElementById("currentTime").innerText = 'Time : '+ (player.currentTime.toFixed(0) - song.timestamp[timestampIndex])+ ' s';},1000);
        document.getElementById("animeImageImg").style.filter = "blur(10px)";
        document.getElementById("animeImageImg").setAttribute("src","src/image/"+song.url_image);
        switch(difficulty){
            case 1: 
                i = 31;
                result = setInterval(function(){document.getElementById("currentTime").innerText = 'Time : '+ i + ' s';i--;},1000);
                setTimeout(function() { player.pause(); clearInterval(result);}, 30000);
                break;
            case 2: 
                i = 21;
                result = setInterval(function(){document.getElementById("currentTime").innerText = 'Time : '+ i + ' s';i--;},1000);
                setTimeout(function() { player.pause(); clearInterval(result);}, 20000);
                break;
            case 3: 
                i = 11;
                result = setInterval(function(){document.getElementById("currentTime").innerText = 'Time : '+ i + ' s';i--;},1000);
                setTimeout(function() { player.pause(); clearInterval(result);}, 10000);
                
                break;
        }
    });
}
