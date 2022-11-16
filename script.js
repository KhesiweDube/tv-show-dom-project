function setup() {
  const allEpisodes = getAllEpisodes();
  // makePageForEpisodes(allEpisodes);
  showEpisodes(allEpisodes);
  //displayEpisodes(allEpisodes)
}

//
function showEpisodes(episodes) {
  episodes.forEach((episode) => {
    const add = displayEpisodes(episode);
    container.appendChild(add);
  });
}

//
function displayEpisodes(episodes) {
  // creating elements
  const epi = document.createElement("div");
  epi.classList.add("episode");
  const title = document.createElement("h2");
  title.classList.add("episode-title");
  const image = document.createElement("img");
  image.classList.add("episode-image");
  const summary = document.createElement("p");
  summary.classList.add("episode-description");

  //
  let titleText = `${episodes.name}-S0${episodes.season}E${episodes.number}`;
  title.textContent = titleText;
  image.src = episodes.image.medium;
  summary.innerHTML = `${episodes.summary}`;
  // console.log(summary);

  //
  epi.appendChild(title);
  epi.appendChild(image);
  epi.appendChild(summary);
  container.appendChild(epi);
  return epi;
}

window.onload = setup;

// SEARCH FUNCTIONALITY.
function search() {
  let total = 0;
  const searchText = document.querySelector(".search-box").value.toLowerCase();
  const totalCount = document.querySelector(".search-result");
  const episode = document.querySelectorAll(".episode");

  for (let i = 0; i < episode.length; i++) {
    let content = episode[i].textContent.toLowerCase();
    console.log(content);
    if (content.includes(searchText)) {
      episode[i].style.display = "";
      total++;
    } else {
      episode[i].style.display = "none";
    }
  }

  if (total !== episode.length) {
    totalCount.innerHTML = `Displaying ${total}/${episode.length} episodes`;
  } else {
    totalCount.innerHTML = "Search Something";
  }
}
