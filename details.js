const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const name = params.get("name");

const url = "https://www.amiiboapi.com/api/amiibo/name/" + name;

async function getGameBYName() {
    const heading = document.querySelector(".btn");

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log("details", details);


        heading.innerHTML = details.name;

    } catch (error) {
        heading.innerHTML = "An error occured" ;
        console.log(error);
    } finally {
        const loading = document.querySelector(".loading");
        loading.style.display = "none";
    }
}

getGameBYName();
