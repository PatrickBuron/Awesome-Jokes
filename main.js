// const btnEl = document.getElementById("btn");
// const jokeEl = document.getElementById("joke");

// const apiKey = "yFswsRpgY2ueBcTFJIapog==pTyQJaymElDinNGg";

// const options = {
//     method: "GET",
//     headers: {
//         "X-Api-key": apiKey,
//     },
// }

// const apiURL = "https://api.api-ninjas.com/v1/chucknorris?limit=1"

// async function getJoke() {
//     const response = await fetch(apiURL, options)
//     const data = await response.json()

//     jokeEl.innerText = data.joke;

//     // console.log(data.joke)
// }

// btnEl.addEventListener("click", getJoke)





const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "yFswsRpgY2ueBcTFJIapog==pTyQJaymElDinNGg";

const options = {
    method: "GET",
    headers: {
        "X-Api-key": apiKey,
    },
}

const apiURL = "https://api.api-ninjas.com/v1/chucknorris?limit=1"

async function getJoke() {
    const response = await fetch(apiURL, options)
    const data = await response.json()

    jokeEl.innerText = data.joke;

    // console.log(data.joke)
}

btnEl.addEventListener("click", getJoke)




const btnOneEl = document.getElementById("btn-one");
const jokeOneEl = document.getElementById("dadJoke");

const apiKeyOne = "yFswsRpgY2ueBcTFJIapog==pTyQJaymElDinNGg";

const optionsOne = {
    method: "GET",
    headers: {
        "X-Api-key": apiKeyOne,
    },
}

const apiURLOne = "https://api.api-ninjas.com/v1/dadjokes?limit=1"


async function getJokeOne() {
    const responseOne = await fetch(apiURLOne, optionsOne)
    const dataOne = await responseOne.json()

    jokeOneEl.innerText = dataOne[0].joke;

    console.log(dataOne[0].joke)
}

btnOneEl.addEventListener("click", getJokeOne)