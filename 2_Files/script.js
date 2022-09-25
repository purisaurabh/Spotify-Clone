console.log("Welcome to Spotify");


// Initialize the variables
let song_index = 0;
let audio_element = new Audio('../1_Material/songs/1.mp3');
let master_play = document.getElementById('master_play');
let my_progress_bar = document.getElementById('my_progress_bar');
let gif = document.getElementById('gif');
let master_song_name = document.getElementById('master_song_name');
let song_item = Array.from(document.getElementsByClassName('song_item'));

let songs = [
    {song_name: "Warriya- Mortal [NCS Release]" , file_path : "../1_Material/songs/1.mp3" , cover_path : "../1_Material/covers/1.jpg"},
    {song_name: "Allan Wlaker [NCS Release]" , file_path : "../1_Material/songs/2.mp3" , cover_path : "../1_Material/covers/2.jpg"},
    {song_name: "DEAF-KEY [NCS Release]" , file_path : "../1_Material/songs/3.mp3" , cover_path : "../1_Material/covers/3.jpg"},
    {song_name: "Deal-make [NCS Release]" , file_path : "../1_Material/songs/4.mp3" , cover_path : "../1_Material/covers/4.jpg"},
    {song_name: "Bobber-death [NCS Release]" , file_path : "../1_Material/songs/5.mp3" , cover_path : "../1_Material/covers/5.jpg"},
    {song_name: "This-make-happy [NCS Release]" , file_path : "../1_Material/songs/6.mp3" , cover_path : "../1_Material/covers/6.jpg"},
    {song_name: "Let me done [NCS Release]" , file_path : "../1_Material/songs/7.mp3" , cover_path : "../1_Material/covers/7.jpg"},
    {song_name: "Want-to [NCS Release]" , file_path : "../1_Material/songs/8.mp3" , cover_path : "../1_Material/covers/8.jpg"}
]

// audio_element.play();

song_item.forEach((element , i) =>
{
    element.getElementsByTagName("img")[0].src = songs[i].cover_path;
    element.getElementsByClassName("song_name")[0].innerText = songs[i].song_name;
}); 


//play/pause click

master_play.addEventListener('click' , ()=>
{
    if(audio_element.paused || audio_element.currentTime <= 0)
    {
        audio_element.play();
        master_play.classList.remove('fa-play');
        master_play.classList.add('fa-pause');
        gif.style.opacity = 1;
    }

    else
    {
        audio_element.pause();
        master_play.classList.remove('fa-pause');
        master_play.classList.add('fa-play');
        gif.style.opacity = 0;
    }
});

audio_element.addEventListener('timeupdate' , () =>
{   
    //console.log('timeupdate');

    //update seek_bar
    progress = parseInt((audio_element.currentTime/audio_element.duration)*100);
    //console.log(progress);

    my_progress_bar.value = progress;

}); 


my_progress_bar.addEventListener('change' , ()=>
{
    audio_element.currentTime = my_progress_bar.value * audio_element.duration/100
});


// to change the song from the list
const make_all_play = ()=>
{
    Array.from(document.getElementsByClassName('song_item_play')).forEach((element)=>
    {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    });
}



Array.from(document.getElementsByClassName('song_item_play')).forEach((element)=>
{
    element.addEventListener('click' , (e)=>
    {
        // console.log(e.target);
        make_all_play();
        song_index = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audio_element.src = `../1_Material/songs/${index+1}.mp3`;
        master_song_name.innerText = songs[song_index].song_name;
        audio_element.currentTime = 0;
        audio_element.play();
        gif.style.opacity = 1;
        master_play.classList.remove('fa-play');
        master_play.classList.add('fa-pause');
    });
})



document.getElementById('next').addEventListener('click' , ()=>
{
    if(song_index >= 7)
    {
        song_index = 0;
    }   

    else
    {
        song_index += 1;
    }

    audio_element.src = `../1_Material/songs/${song_index+1}.mp3`;
    master_song_name.innerText = songs[song_index].song_name;
    audio_element.currentTime = 0;
    audio_element.play();
    gif.style.opacity = 1;
    master_play.classList.remove('fa-play');
    master_play.classList.add('fa-pause');
});


document.getElementById('previous').addEventListener('click', ()=>
{
    if(song_index <= 0)
    {
        song_index = 0;
    }

    else{
        song_index -= 1;
    }

    audio_element.src = `../1_Material/songs/${song_index+1}.mp3`;
    master_song_name.innerText = songs[song_index].song_name;
    audio_element.play();
    master_play.classList.remove('fa-play');
    master_play.classList.add('fa-pause');
});

















































































/*

console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
*/