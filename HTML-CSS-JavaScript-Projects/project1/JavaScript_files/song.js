// song play
function playSound() {
    var sound1 = document.getElementById("audio");
    sound1.play();
}

// song.js
// selecting song to render
const songs = {
    // new releases songs
    NewRelease1: {
        img: "https://i.ytimg.com/vi/EzkE5Gq0t14/maxresdefault.jpg",
        title: "Ram Naam",
        artist: "Sachet-Parampara",
        duration: "2min 17sec",
        year: 2024,
        audioSrc: "external_components/Ram_Siya_Ram_song.mp3"
    },
    NewRelease2: {
        img: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/b4/af/4b/b4af4b1f-e8c2-84ac-2199-4e84227deb2a/8903431975515_cover.jpg/1200x1200bf-60.jpg",
        title: "Narayan Mil Jayega",
        artist: "Jubin Nautiyal",
        duration: "4min 41sec",
        year: 2024,
        audioSrc: "external_components/Another_Song.mp3"
    },
    NewRelease3: {
        img: "https://lh3.googleusercontent.com/mR8GI-B0Uc1DlrLNvIdrmu2ujcOzboQBcC0yaXPUFo5i637rx1mPtmOPwYYAexieMTqV82bQpbSPX4Fw=w544-h544-l90-rj",
        title: "Shankar bole Parvati se",
        artist: "Abhilipsa Panda",
        duration: "6min 52sec",
        year: 2022,
        audioSrc: "external_components/Another_Song.mp3"
    },
    NewRelease4: {
        img: "https://ghantalele.com/uploads/thumbs/thumb-83/41206_5.jpg",
        title: "Parvati boli Shankar se",
        artist: "Hansraj Raghuwanshi",
        duration: "7min 19sec",
        year: 2022,
        audioSrc: "external_components/Another_Song.mp3"
    },
    NewRelease5: {
        img: "https://lh3.googleusercontent.com/B3ZWAI0Zk7yNZPXDiJ1PeGejM7_2Q4-8ZazS6hWhP_rqOtxbN6Oaypa7-iTBVep9Ha_BVVGnhFWTMdI",
        title: "Shri Ram Stuti",
        artist: "Roshan Prince",
        duration: "7min 59sec",
        year: 2024,
        audioSrc: "external_components/Another_Song.mp3"
    },
    NewRelease6: {
        img: "https://sambalpuristar.in/siteuploads/thumb/sft13/6320_4.jpg",
        title: "Jai Shree Ram",
        artist: "Hansraj Raghuwanshi",
        duration: "5min 48sec",
        year: 2024,
        audioSrc: "external_components/Another_Song.mp3"
    },
    NewRelease7: {
        img: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/ea/a9/c8/eaa9c8b6-6156-a4fe-d637-def24ea53cec/8902357690151.png/1200x1200bf-60.jpg",
        title: "Shri Ram Ghar Aaye",
        artist: "Geeta Rabri",
        duration: "7min 44sec",
        year: 2024,
        audioSrc: "external_components/Another_Song.mp3"
    },
    NewRelease8: {
        img: "https://tse2.mm.bing.net/th/id/OIP.D6E2Nwfyd9mxCp53NDorxgAAAA?rs=1&pid=ImgDetMain",
        title: "Suvarnamala Stuti",
        artist: "Simple Kharel",
        duration: "6min 09sec",
        year: 2024,
        audioSrc: "external_components/Another_Song.mp3"
    },



    // most popular songs
    MostPopular1: {
        img: "https://c.saavncdn.com/215/Ram-Siya-Ram-Hindi-2021-20210222031001-500x500.jpg",
        title: "Ram Siya Ram",
        artist: "Sachet Tandon, DJ Glory",
        duration: "3min 25sec",
        year: 2021,
        audioSrc: "external_components/Ram_Siya_Ram_song.mp3"
    },
    MostPopular2: {
        img: "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/5c/8c/f8/5c8cf818-1c64-fcda-133e-9eda875d3a94/8903431782021_cover.jpg/1200x1200bf-60.jpg",
        title: "Shri Krishna Govind Hare Murari",
        artist: "Jubin Nautiyal",
        duration: "2min 34sec",
        year: 2020,
        audioSrc: "external_components/Another_Song.mp3"
    },
    MostPopular3: {
        img: "https://a10.gaanacdn.com/gn_img/albums/a7LWBaz3zX/7LWBVQkDWz/size_l.jpg",
        title: "Hum Katha Sunate Ram Sakal Gun Dham ki",
        artist: "Kavita Krishnamurthy",
        duration: "14min 52sec",
        year: 2020,
        audioSrc: "external_components/Another_Song.mp3"
    },
    MostPopular4: {
        img: "https://lh3.googleusercontent.com/C9tdTEsZYfW4SsbjTBHgC6OEI4JazLpuUBJYsn4JFKT8JbCDas3elfuLRZiYmNdFydqL71nDruWzLCgU",
        title: "Radha Rani Lage",
        artist: "Simple Kharel",
        duration: "4min 48sec",
        year: 2023,
        audioSrc: "external_components/Another_Song.mp3"
    },
    MostPopular5: {
        img: "https://m.media-amazon.com/images/M/MV5BYWRkYWIxODktODMwOC00OWUxLWFiYTQtYTMzZWE1MTYwOTUzXkEyXkFqcGc@._V1_.jpg",
        title: "Ekadantaya Vakratundaya",
        artist: "Suprabha KV",
        duration: "7min 05sec",
        year: 2017,
        audioSrc: "external_components/Another_Song.mp3"
    },
    MostPopular6: {
        img: "https://i.pinimg.com/736x/0d/36/b9/0d36b90a0bece8d19e11028b050b93da.jpg",
        title: "Krishna Hain Vistaar",
        artist: "Surya Raj Kamal",
        duration: "5min 02sec",
        year: 2020,
        audioSrc: "external_components/Ram_Siya_Ram_song.mp3"
    },
    MostPopular7: {
        img: "https://i.ytimg.com/vi/dHUkqoCOHck/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gJygyMA8=&rs=AOn4CLDuGLYh6nawuiWWt5lB2sO0U93-CA",
        title: "Lagi Lagan Shankara",
        artist: "Hansraj Raghuvanshi",
        duration: "4min 04sec",
        year: 2021,
        audioSrc: "external_components/Another_Song.mp3"
    },
    MostPopular8: {
        img: "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/e5/f8/ea/e5f8eaf4-1855-01fd-5287-938405d82672/8903431906946_cover.jpg/1200x1200bf-60.jpg",
        title: "Mere Ghar Ram Aaye Hai",
        artist: "Jubin Nautiyal",
        duration: "3min 55sec",
        year: 2022,
        audioSrc: "external_components/Another_Song.mp3"
    },

};

function updateSongPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const songId = urlParams.get('songId');
    const song = songs[songId];

    if (song) {
        document.getElementById('runningSongImg').src = song.img;
        document.getElementById('songTitle').textContent = song.title;
        document.getElementById('songDetails').innerHTML = `<b>${song.artist}</b> &nbsp; &#9834; &nbsp; <b>${song.year}</b> &nbsp; <b>${song.duration}</b>`;
        document.getElementById('audio').src = song.audioSrc;
        document.getElementsById('MoreVidArtist').innerHTML=`<p style="font-family: Bolt Bd BT;" id="MoreVidArtist">&nbsp;&nbsp;${song.artist}</p>`
    } else {
        console.error('Song not found');
    }
}

function playSound() {
    const audio = document.getElementById('audio');
    if (audio) {
        audio.play();
    }
}

window.onload = updateSongPage;

