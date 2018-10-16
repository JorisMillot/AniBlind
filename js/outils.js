var player = new Audio();
var difficulty = 1;

function nextSong(){
    let songIndex = Math.random()*(data.length);
    playAudio(Math.floor(songIndex));
}

function playAudio(songIndex){
    //Todo : attendre le load avant de continuer
    var song = data[songIndex];
    var audiopath = 'src/audio/'+song.url_audio;
    player.src = audiopath;
    var timestampIndex = Math.random()*song.timestamp.length;
    timestampIndex = Math.floor(timestampIndex);
    player.currentTime = song.timestamp[timestampIndex];
    player.play();
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
}

function setDifficulty(){
    difficulty = parseInt(document.getElementById('difficultySelect').value);
}