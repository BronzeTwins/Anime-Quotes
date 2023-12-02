const apiURL = "https://animechan.xyz/api/random";
const anime = document.getElementById("anime");
const animeQuote = document.getElementById("animeQuote");
const animeCharacter = document.getElementById("animeCharacter");

async function getQuote(url) {
  const response = await fetch(url);
  let animeData = await response.json();
  console.log(animeData);
  anime.innerHTML = animeData.anime;
  animeQuote.innerHTML = ' " ' + animeData.quote + ' " ';
  animeCharacter.innerHTML = "-- " + animeData.character;
}

getQuote(apiURL);

function tweet() {
  window
    .open(
      "https://twitter.com/intent/tweet?text=" +
        anime.innerHTML +
        " : %0A  " +
        animeQuote.innerHTML +
        " %0A " +
        animeCharacter.innerHTML,
      "_blank"
    )
    .focus();
}
