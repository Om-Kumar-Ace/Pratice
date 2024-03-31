let currentsong = new Audio();

let songs

function convertSecToMinAndSec(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

async function getSongs () {
    let a = await fetch("http://127.0.0.1:5500/Spotify/song/")
    let response = await a.text();
    console.log(response)
    let div = document.createElement("div")
    div.innerHTML =response;
    let as = div.getElementsByTagName("a")
    console.log(as)
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")){
            songs.push(element.href.split("/song/")[1])
        }
        
    }
    return songs
}

const playMusic = (tarck , pause=false)=>{

    currentsong.src ="/Spotify/song/" + tarck
    if (!pause) {
        
        currentsong.play()
        play.src = "pause.svg"
    }
    document.querySelector(".sinfo").innerHTML = decodeURI (tarck)
    document.querySelector(".stime").innerHTML = "00:00/00:00"
}

async function main() {
    

    songs = await getSongs()
    playMusic(songs[0] ,true)

    let songul = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songul.innerHTML=songul.innerHTML + `<li>
        <img class="invert" src="music.svg" alt="">
        <div class="info">
          <div>${song.replaceAll("%20"," ")}</div>
          <div> Om </div>
        </div>
        <div class="playnow">
          <span>Play Now</span>
          <img src="play.svg" alt="">
        </div>
      </li> `;
    }

    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e=>{
        e.addEventListener("click" ,element =>{
        console.log(e.querySelector(".info").firstElementChild.innerHTML)
        playMusic(e.querySelector(".info").firstElementChild.innerHTML)
        })
    })
    play.addEventListener("click", ()=>{
        if (currentsong.paused) {
            currentsong.play()
            play.src ="pause.svg"
        } 
        else{
            currentsong.pause()
            play.src ="play.svg"
        }
            
    })
    currentsong.addEventListener("timeupdate",()=>{
        console.log(currentsong.currentTime,currentsong.duration);
        document.querySelector(".stime").innerHTML =`${convertSecToMinAndSec(currentsong.currentTime)}/${convertSecToMinAndSec(currentsong.duration)}`
        document.querySelector(".circle").style.left = (currentsong.currentTime/currentsong.duration)*100 + "%";
    })

    document.querySelector(".seekbar").addEventListener("click",e=>{
        let percent = (e.offsetX/e.target.getBoundingClientRect().width) * 100
        document.querySelector(".circle").style.left = percent  + "%" ;
        currentsong.currentTime =(( currentsong.duration) * percent)/100
    } )
    document.querySelector(".hamburger").addEventListener("click",()=>{
        document.querySelector(".left").style.left = "0"
    })
    document.querySelector(".close").addEventListener("click",()=>{
        document.querySelector(".left").style.left = "-120%"
    })
    prev.addEventListener("click",()=>{
        console.log("Previous clicked")
        let index = songs.indexOf(currentsong.src.split("/").slice(-1)[0])
        if (index-1 >=0) {
            
            playMusic(songs[index-1])
        }
    })
    next.addEventListener("click",()=>{
        console.log("Next clicked")
        let index = songs.indexOf(currentsong.src.split("/").slice(-1)[0])
        if (index+1 < songs.length) {
            
            playMusic(songs[index+1])
        }
    })
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        console.log("Setting volume to", e.target.value, "/ 100")
        currentSong.volume = parseInt(e.target.value) / 100
        if (currentSong.volume >0){
            document.querySelector(".volume>img").src = document.querySelector(".volume>img").src.replace("mute.svg", "volume.svg")
        }
    })
    return songs
}

main()