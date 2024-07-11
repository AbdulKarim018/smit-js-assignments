const searchInput = document.getElementById("searchInput");
const newsContainer = document.getElementById("newsContainer");
const loader = document.getElementById("loader");
const apiURL = new URL("https://gnews.io/api/v4/top-headlines");

searchInput.addEventListener("keydown", async (event) => {
  const userQuery = searchInput.value;
  if (event.key === "Enter") {
    // console.log(searchInput.value);
    loader.style.display = "flex";
    newsContainer.innerHTML = "";
    const news = await fetchNews(userQuery);
    loader.style.display = "none";
    news.forEach((article) => {
      newsContainer.innerHTML += `
      
      
      <a class="card bg-base-100 w-80 shadow-xl" href="${article.url}" target="_blank">
            <figure>
              <img
                src="${article.image}"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">
                ${article.title}
              </h2>
              <p>${article.description}</p>
            </div>
          </a>
      
      
      `;
    });
  }
});

async function fetchNews(query) {
  apiURL.searchParams.append("apikey", "4efccec5b8619db66e5f4ff271f0eb93");
  apiURL.searchParams.append("country", "pk");
  if (query && query.trim().length > 0) {
    apiURL.searchParams.append("q", query.trim());
  }

  apiURL.searchParams.append("search", searchInput.value);

  const response = await fetch(apiURL);
  const data = await response.json();
  // console.log("data from api: ", data);
  return data.articles;
}

fetchNews().then((news) => {
  loader.style.display = "none";
  newsContainer.innerHTML = "";
  news.forEach((article) => {
    newsContainer.innerHTML += `
      
      
      <a class="card bg-base-100 w-80 shadow-xl" href="${article.url}" target="_blank">
            <figure>
              <img
                src="${article.image}"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">
                ${article.title}
              </h2>
              <p>${article.description}</p>
            </div>
          </a>
      
      
      `;
  });
});
