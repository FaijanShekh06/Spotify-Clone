console.log("hello");

async function getSongs() {
  let a = await fetch("http://127.0.0.1:3000/songs/");
  let response = await a.text();
  console.log(response);
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  let songs = [];
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split("/songs/")[1]);
    }
  }
  return songs;
}
async function main() {
  //Get all The Songs
  let songs = await getSongs();
  console.log(songs);
  // show all the song in the playlist
  let songUl = document
    .querySelector(".songList")
    .getElementsByTagName("ul")[0];
  for (const song of songs) {
    songUl.innerHTML =
      songUl.innerHTML +
      `<li> <img width="20" class="invert" src="music.svg" alt="" />
                <div class="info">
                  <div>${song
                    .replaceAll("%20", " ")
                    .replace("%EB%9B%B0%EC%96%B4", "")
                    .replace(".mp3", " ")}</div>
                  <div>Officle Artist</div>
                </div>
                <div class="playNow">
                  <span>Play Now</span>
                  <img class="invert" width="30" src="play.svg" alt="" />
                </div></li>`;
  }
}
main();
