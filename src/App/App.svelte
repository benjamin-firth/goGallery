<script>
	import { displayedArt, isLoading, startApp } from '../stores.js';
	import NavBar from '../NavBar/NavBar.svelte';
	import Splash from '../Splash/Splash.svelte';
	import Loading from '../Loading/Loading.svelte';
	import PicContainer from '../PicContainer/PicContainer.svelte';
	import Picture from '../Picture/Picture.svelte';
	let shownWork;
	let loadingBool;
	let startAppBool;

	const unsubscribe = displayedArt.subscribe(value => {
		shownWork = value;
	});

	const unsubscribeLoading = isLoading.subscribe(value => {
		loadingBool = value;
	});

	const unsubscribeStart = startApp.subscribe(value => {
		startAppBool = value;
	});
</script>

<main>
	<NavBar />
	{#if startAppBool}
		<Splash />
	{:else}
		{#if loadingBool}
			<Loading />
		{:else}
			<section class='art-container'>
				{#if shownWork.length}
					{#each shownWork as artPiece}
					<Picture 
						title={artPiece.title} 
						img={artPiece.primaryimageurl} 
						century={artPiece.century}/>
					{/each}
				{:else}
					<h3>This culture doesn't currently have any pieces.  Please select another.</h3>
				{/if}
			</section>
		{/if}
	{/if}
</main>

<style>
	main {
		height: 100vh;
		text-align: center;
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