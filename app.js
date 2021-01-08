const getMovie = async () => {
	try {
		const responsive = await fetch(
			'https://moviesapi-app.herokuapp.com/api/getList'
		);
		return await responsive.json();
	} catch (e) {
		console.log('Error:' + e);
	}
};

getMovie().then((responsive) => {
	const content = document.querySelector('.contenedor');
	let choose = responsive.data;
	console.log(choose);
	choose.forEach((items) => {
		codigo = `
    
        <div class="card">
           <img src="${items.image}">
        </div>`;
		content.innerHTML += codigo;
	});
});
