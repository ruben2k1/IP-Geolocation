const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cdc5517a8amsh75176dccd4b486ap146b9bjsnd8945d880313',
		'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com'
	}
};

const buscarIP = async ip => {
	return fetch(`https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?ip=${ip}&apikey=873dbe322aea47f89dcf729dcc8f60e8`, options)
	.then(response => response.json())
	.catch(err => console.error(err));
}

const form = document.querySelector('#form');
const input = document.querySelector('#input');
const resultados = document.querySelector('#resultados');
const btn = document.querySelector('#btn');

form.addEventListener('submit', async event => {
    event.preventDefault();
    
    const { value } = input;

	btn.setAttribute('disabled', '');
	btn.setAttribute('aria-busy', 'true');

    const ipinfo = await buscarIP(value);

    if (ipinfo) {
		resultados.innerHTML = JSON.stringify(ipinfo, null, 2);
	}

	btn.removeAttribute('disabled');
	btn.setAttribute('aria-busy', 'false');
})