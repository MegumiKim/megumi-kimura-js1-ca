const container = document.querySelector(".film-container");
const title = document.querySelector("title");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const url = `http://www.omdbapi.com/?apikey=f9d54557&i=${id}`;

async function fetchFilm() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    createHtml(details);
  } catch (error) {
    console.log(error);
    container.innerHTML = message("error", error);
  }
}

fetchFilm();

function createHtml(details) {
  title.innerHTML = "My Films | " + details.Title;
  container.innerHTML = `
  <img class="image" src='${details.Poster}' /img>
  <div class='description'>
  <h1>${details.Title}</h1>
  <p>Year: ${details.Year}</p>
  <p>Genre: ${details.Genre}</p>
  <p>Rating: ${details.imdbRating} / 10</p>
  <p>Language: ${details.Language}</p>
  <p>${details.Plot}</p>
  </div>

  `;
}
