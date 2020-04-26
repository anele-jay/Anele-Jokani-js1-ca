
fetch("https://www.amiiboapi.com/api/amiibo/")
.then(function(response){
	return response.json();
})
.then(function(json){
	viewResults(json);
})
.catch(function(error) {
	console.log(error);
});

function viewResults(json) {
    const content = json.amiibo;

    let html = "";

    for (let i = 0; i < content.length; i++) {
        let activeClass = "";

        if (i === 0) {
            activeClass = "active";
        }

		html += `<div class="view-Item ${activeClass}">
		            <p> ${content[i].name} </p>
                    <img src="${content[i].image}" class="d-block w-100">
                </div>`;
    }

    const carouselInner = document.querySelector("#viewRes");
    carouselInner.innerHTML = html;
}
