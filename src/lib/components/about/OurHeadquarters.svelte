<script lang="ts">
    import Location from "./Location.svelte";

    import {locations} from '$lib/data/data'
</script>

<div class="container">
    <h2>Our headquarters</h2>
    <div class="locations">
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

    @media only screen and (min-width: 768px){
        h2{
            text-align: left;
        }

        .locations{
            display: flex;
            justify-content: space-between;
            text-align: left;
        }
    }
</style>