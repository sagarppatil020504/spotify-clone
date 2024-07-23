console.log("lets start  js")

//below is to seperate out mp4 files from the data set given
async function getvideo(){
    let a= await fetch("http://127.0.0.1:5500/songs/")
    let responce =await a.text();
    console.log(responce);
    let div= document.createElement("div")
    div.innerHTML=responce;
    let as =div.getElementsByTagName("a")
    console.log(as)
    
    vid=[]
    
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")){
            vid.push(element.href)
        }
    }
    return vid
}


async function main(){
    song = await getvideo()
    console.log(song)
    var audio=new Audio(song[0])
    audio.play()
    
    audio.addEventListener("loadeddata",()=>{
        console.log(audio.duration,audio.current,audio.currentTime)
    })
}
main()





//     upvide=[]
//     for (let i = 0; i < vid.length; i++) {
//         const upvid = vid[i];
//         let updatedis=(+upvid )
//         console.log(updatedis)
        
//         upvide.push(updatedis)
//     }
//     console.log(upvide)


//playing the video

function pauseVid() {
    vid.pause();
}

