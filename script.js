
fetch('movies.json')
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById("movie-list");
    const search = document.getElementById("search");

    function displayMovies(movies) {
      list.innerHTML = '';
      movies.forEach(movie => {
        list.innerHTML += `
          <div class="movie-card">
            <h2>${movie.title}</h2>
            <p>Quality: ${movie.quality}</p>
            <a href="${movie.link}" target="_blank">📥 Download</a>
            <a href="${movie.link}" target="_blank">▶️ Stream</a>
          </div>
        `;
      });
    }

    displayMovies(data.movies);

    search.addEventListener("input", () => {
      const filtered = data.movies.filter(movie =>
        movie.title.toLowerCase().includes(search.value.toLowerCase()) ||
        movie.quality.toLowerCase().includes(search.value.toLowerCase())
      );
      displayMovies(filtered);
    });
  });
