<script lang="ts">
    import './style.css'
	import Header from '$lib/components/shared/Header.svelte';
	import Footer from '$lib/components/shared/Footer.svelte';
</script>

<div class="container">
	<Header />
    <slot />
	<Footer />
</div>

<style>
    .container {
		width: 23.438rem;
		display: block;
		margin-left: auto;
		margin-right: auto;
		padding-bottom: 5rem;
	}

	@media only screen and (min-width: 768px){
		.container{
			width: 48rem;
		}
	}

	@media only screen and (min-width: 1100px){
		.container{
			width: 90rem;
		}
	}
</style>