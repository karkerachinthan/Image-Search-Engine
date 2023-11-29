const accesskey = "yE3cx0qV31aau7pzKpC_GNesCaRo0GPtxldQ_6C6RY8";
const searchForm = document.getElementById("Search form");
const searchBox = document.getElementById("Search Box");
const searchResult = document.getElementById("search-result");
const ShowMoreButton = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if (page === 1) {
        searchResult.innerHTML = "";
    }

    const results = data.results;
    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);

    })
    ShowMoreButton.style.display = "block";
}
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();

});

ShowMoreButton.addEventListener("click", () => {
    page++;
    searchImages();
}
)

