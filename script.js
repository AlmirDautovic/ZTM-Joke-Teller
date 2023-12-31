const button = document.getElementById('button');
const audioElement = document.getElementById('audio');


function tellMe(joke) {
    VoiceRSS.speech({
        // api key 12069e553aac49ce94a5aac31a8e25de
        key: '12069e553aac49ce94a5aac31a8e25de',
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}


function toggleButton() {
    button.disabled = !button.disabled;
}
// function to get joke from api

async function getJokes() {
    let joke = '';
    const apiUrl = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.setup) {
            joke = `${data.setup} ... ${data.delivery}`;
        } else {
            joke = data.joke;
        }
        tellMe(joke);
        toggleButton();
    } catch (error) {
        console.log(error);
    }
}

button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);