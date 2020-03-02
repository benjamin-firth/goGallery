<script>
	import { displayedArt } from '../stores.js';
	import NavBar from '../NavBar/NavBar.svelte';
	import PicContainer from '../PicContainer/PicContainer.svelte';
	import Picture from '../Picture/Picture.svelte';
	let shownWork;

	const unsubscribe = displayedArt.subscribe(value => {
		shownWork = value;
	});
</script>

<main>
	<NavBar />
	<section class='art-container'>
		{#if shownWork.length}
			{#each shownWork as artPiece}
			<Picture title={artPiece.title} img={artPiece.primaryimageurl}/>
			{/each}
		{:else}
			<h3>This culture doesn't currently have any pieces.  Please select another.</h3>
		{/if}
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

	img {
		width: 300px;
	}

	.art-container {
		display: flex;
		overflow: auto;
  	white-space: nowrap;
	}

	#blockColorblindContent {
		display: none;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>