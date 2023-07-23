/* jshint esversion: 8 */

function loadJokes() {
    getJoke();
    getJokeOne();
}

const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "yFswsRpgY2ueBcTFJIapog==pTyQJaymElDinNGg";

const options = {
    method: "GET",
    headers: {
        "X-Api-key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/chucknorris?limit=1";

async function getJoke() {
    jokeEl.innerText = "Updating";
    btnEl.disabled = true;
    btnEl.innerText = "Loading";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell a joke";
    jokeEl.innerText = data.joke;
}

btnEl.addEventListener("click", getJoke);


const btnOneEl = document.getElementById("btn-one");
const jokeOneEl = document.getElementById("dadJoke");

const apiKeyOne = "yFswsRpgY2ueBcTFJIapog==pTyQJaymElDinNGg";

const optionsOne = {
    method: "GET",
    headers: {
        "X-Api-key": apiKeyOne,
    },
};

const apiURLOne = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJokeOne() {

    jokeOneEl.innerText = "Updating";
    btnOneEl.disabled = true;
    btnOneEl.innerText = "Loading";

    const responseOne = await fetch(apiURLOne, optionsOne);
    const dataOne = await responseOne.json();

    btnOneEl.disabled = false;
    btnOneEl.innerText = "Tell me a joke";

    jokeOneEl.innerText = dataOne[0].joke;
}

btnOneEl.addEventListener("click", getJokeOne);



