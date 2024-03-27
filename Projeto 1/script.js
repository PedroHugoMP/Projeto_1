document.addEventListener('DOMContentLoaded', function() {
    fetchImage();
});

function fetchImage() {
    const image = document.getElementById('aventuraImg');
    fetch('https://api.rawg.io/api/games?key=fb5c50ef241e4c4aaa63da5dfbb9d747')
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.results.length);
            const game = data.results[randomIndex];
            image.src = game.background_image;
            image.alt = game.name;
        })
        .catch(error => console.log(error));
    }