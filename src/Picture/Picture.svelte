<script>
  export let title;
  export let img;
  export let century;
</script>

<div>
  <h3>{title}</h3>
	<img src={img}/>
  <p>{century}</p>
</div>

<style>
  div {
    margin: 30px;
    width: 400px;
  }

  img {
    width: 300px;
  }
</style>