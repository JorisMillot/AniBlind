var player = new Audio();
var difficulty = 1;
var currentSong;

function nextSong(){
    currentSong = Math.floor(Math.random()*(data.length));
    playAudio(currentSong);
}

function playAudio(songIndex){
    var song = data[songIndex];
    var audiopath = 'src/audio/'+song.url_audio;
    player.src = audiopath;
    var timestampIndex = Math.random()*song.timestamp.length;
    timestampIndex = Math.floor(timestampIndex);
    player.currentTime = song.timestamp[timestampIndex];
    player.play().then(function (){
        document.getElementById("animeImageImg").style.filter = "blur(10px)";
        document.getElementById("animeImageImg").setAttribute("src","src/image/"+song.url_image);
        switch(difficulty){
            case 1: 
                setTimeout(function() { player.pause(); }, 30000);
                break;
            case 2: 
                setTimeout(function() { player.pause(); }, 20000);
                break;
            case 3: 
                setTimeout(function() { player.pause(); }, 10000);
                break;
        }
    });
}
