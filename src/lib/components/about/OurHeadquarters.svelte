<script lang="ts">
    import Location from "./Location.svelte";

    import {locations} from '$lib/data/data'
</script>

<div class="container">
    <h2>Our headquarters</h2>
    {#each locations as location}
        <Location
            img={location.img}
            country={location.country}
            street={location.address.street}
            city={location.address.city}
            postCode={location.address.postCode}
            phoneNumber={location.phoneNumber}
        />
    {/each}
</div>

<style>
    .container{
        margin-top: 7.5rem;
    }

    h2{
        color: #83888F;
        font-size: 1.5rem;
        line-height: 2rem;
    }
</style>