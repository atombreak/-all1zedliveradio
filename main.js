let playbtn = document.getElementById("playbtn");
let btn = document.getElementById("btn");
let song = document.getElementById("song")
let channel = document.querySelectorAll(".fa-play")
let volume = document.getElementById("volume")
let share = document.getElementById("share")
let info = document.getElementById("info")
let continfo = document.getElementById("continfo")

let state = 0;

window.onscroll = () => {
    continfo.classList.remove("active");
}
info.onclick = () => {
    continfo.classList.toggle("active");
}
volume.onclick = () => {
    if (volume.classList.contains("fa-volume-up")) {
        song.volume = 0;
        volume.classList.replace("fa-volume-up", "fa-volume-mute");
    } else {
        song.volume = 1;
        volume.classList.replace("fa-volume-mute", "fa-volume-up");
    }
}
share.onclick = (event) => {
    /* if (navigator.share) {

    } else {
        alert("it doesn't support")
    }*/
    navigator.share({
        title: "QFM RADIO SHARE LINK",
        url: "https://s3.myradiostream.com/7620/listen.mp3"
    }).then(() => {}).catch(console.error)

}

playbtn.addEventListener("click", () => {

    if (state == 0) {
        state = 1;
        song.play();
        song.load();
        playbtn.classList.replace("fa-play", "fa-pause")
    } else {
        state = 0;
        song.pause()
        playbtn.classList.replace("fa-pause", "fa-play")
    }
})



channel.forEach((channel, index) => {

    channel.addEventListener("click", (index) => {

        let dataSong = channel.getAttribute("data-songSrc");
        let dataActive = channel.getAttribute("data-active");
        song.src = dataSong;

        channels = document.querySelectorAll(".btn")
        channels.forEach(channels => {
            channels.setAttribute("data-active", "");
            channels.classList.replace("fa-pause",
                "fa-play");

        });

        if (dataActive == "") {
            state = 1;
            song.load();
            song.play();
            channel.setAttribute("data-active", "active");
            channel.classList.replace("fa-play",
                "fa-pause");
            channel.classList.add("active");
            playbtn.classList.replace("fa-play", "fa-pause")
        } else if (dataActive == "pause") {
            state = 1;
            song.play();
            channel.setAttribute("data-active", "active");
            channel.classList.replace("fa-play",
                "fa-pause");
            channel.classList.add("active");
            playbtn.classList.replace("fa-play", "fa-pause")
        } else {
            state = 0;
            song.pause();
            channel.setAttribute("data-active", "pause");
            channel.classList.replace("fa-pause",
                "fa-play");
            channel.classList.remove("active")
            playbtn.classList.replace("fa-pause", "fa-play")
        }
    })

})