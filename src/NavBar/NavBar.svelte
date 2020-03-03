<script>
  import { onMount } from 'svelte';
  import { displayedArt, cultureID } from '../stores.js';

  onMount(async () => {
		let response = await fetch(`https://api.harvardartmuseums.org/culture?apikey=1c274a30-5bfa-11ea-80aa-f5d9d18048cb`);
    let cultureData = await response.json();
    cultureID.set(cultureData.records);
	});

  const getSomeArtStuff = async (cultureID) => {
		let apiKey = '1c274a30-5bfa-11ea-80aa-f5d9d18048cb';
		let response = await fetch(`https://api.harvardartmuseums.org/object?apikey=1c274a30-5bfa-11ea-80aa-f5d9d18048cb&culture=${cultureID}`);
    let data = await response.json();
    displayedArt.set(data.records);
  };
  
  let cultures;

	const unsubscribe = cultureID.subscribe(value => {
		cultures = value;
	});
</script>

<section>
  <h1>goGallery</h1>
  <form>
    <select on:change={(e) => getSomeArtStuff(e.target.value)}>
      <option value='initial'>CHOOSE A CULTURE</option>
      <option 
            value={37527021}>Bohemian
          </option>
      {#if cultures.length}
			  {#each cultures as culture}
			    <option 
            value={culture.id}>{culture.name}
          </option>
			  {/each}
		  {/if}
    </select>
  </form>
</section>

<style>
  section {
    background-color: #1A9880;
    padding: 4px;
  }

  button {
		cursor: pointer;
	}

  h1 {
    color: #052429;
    font-size: 40px;
    margin: 0px 0px 15px 0px;
  }

</style>