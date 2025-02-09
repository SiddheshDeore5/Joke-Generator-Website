document.getElementById('jokeBtn').addEventListener('click', generateJoke);

generateJoke();

function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    };

    fetch('https://icanhazdadjoke.com/', config)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('joke').innerHTML = data.joke;
        })
        .catch((error) => {
            document.getElementById('joke').innerHTML = 'Oops! Something went wrong. Please try again.';
            console.error('Error fetching the joke:', error);
        });
}