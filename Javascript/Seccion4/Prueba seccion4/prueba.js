const url = 'https://dog-api.p.rapidapi.com/list/all';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f56017d85cmshbf7a7fb23ffa8bfp15439bjsn020885fc5379',
		'x-rapidapi-host': 'dog-api.p.rapidapi.com'
	}
};

async function All() {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);  
}

function renderAll(all) {
const container = document.getElementById('razaDePerros');
let html = "";
all.forEach((all) => {
    html += `
    <div class="perro">
    <img src="${all.message}" alt="${all.message}">
    <h2>${all.message}</h2>
  </div>`;
});
container.innerHTML = html;
}

try {
getAll();
} catch (error) {
	console.error(error);
}