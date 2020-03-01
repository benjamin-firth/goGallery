<script>
	import NavBar from '../NavBar/NavBar.svelte';
	import PicContainer from '../PicContainer/PicContainer.svelte';
	import Picture from '../Picture/Picture.svelte';
	let displayedArt = {records: []};

	const getSomeArtStuff = async () => {
		let apiKey = '1c274a30-5bfa-11ea-80aa-f5d9d18048cb';
		let response = await fetch(`https://api.harvardartmuseums.org/object?apikey=1c274a30-5bfa-11ea-80aa-f5d9d18048cb&culture=37527021`);
		let data = await response.json();
		displayedArt = data;
	};

	const findDis = () => {
		console.log('firing');
		console.log(displayedArt);
	};

	// =${this.cultureIDs[clickedCulture]}
	// 37527021
</script>

<main>
	<NavBar />
	<button type='button' on:click={getSomeArtStuff}>Fetch Dis</button>
	<button type='button' on:click={findDis}>Find Dis</button>
	<section>
		{#each displayedArt.records as artPiece}
			<p>{artPiece.title}</p>
		{/each}
	</section>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	button {
		cursor: pointer;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>