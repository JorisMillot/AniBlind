var player = new Audio();
var difficulty = 1;

function getRandomSong(){
    //TODO
}

function playAudio(){
    let audiopath = 'src/audio/'+data[1].url_audio;
    player.src = audiopath;
    player.currentTime = 20;
    player.play();
    /*switch(difficulty){
        setTimeout(function() { player.pause(); }, 3000);
    }*/
}