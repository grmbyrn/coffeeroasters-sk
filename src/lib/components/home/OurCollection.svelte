<script lang="ts">
    import Collection from "./Collection.svelte";

    import {collections} from "$lib/data/data"
</script>

<h2>our collection</h2>
{#each collections as collection}
    <Collection
        img={collection.img}
        heading={collection.heading}
        para={collection.para}
    />
{/each}

<style>
    h2 {
        text-align: center;
        margin-top: 7.5rem;
        font-size: 2.5rem;
        background: -webkit-linear-gradient(#83888F, #eee);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>