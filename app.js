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
		<h1>${items.name}:</h1>
		   <img src="${items.image}"> <br>
		   
		</div>
	<div>
	   <h2>Descripción:</h2> 
		<p>${items.description}</p>
		
		<b><p>Actor:</b> ${items.actors}</p> 
		<b><p>Director:</b> ${items.director}</p>
	<div>
		`;
		content.innerHTML += codigo;
	});
});
