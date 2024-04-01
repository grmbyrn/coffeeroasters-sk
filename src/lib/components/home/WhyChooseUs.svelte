<script lang="ts">
    import Choice from "./Choice.svelte";

    import {choices} from "$lib/data/data"
</script>

<div class="container">
    <div class="inner-container">
        <h2>Why choose us?</h2>
        <p>
            A large part of our role is choosing which particular coffees will be featured  in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.
        </p>
    </div>
    <div class="choices">
        {#each choices as choice}   
            <Choice
                img={choice.img}
                heading={choice.heading}
                para={choice.para}
            />
        {/each}
    </div>
</div>

<style>
    .container{
        margin-inline: 1.5rem;
        text-align: center;
        background-color: #2C343E;
        border-radius: 10px;
        margin-top: 7.5rem;
        height: 902px;
    }

    .inner-container{
        padding-top: 4rem;
    }

    h2,
    p{
        color: #FEFCF7;
    }

    h2{
        font-size: 1.75rem;
        line-height: 1.75rem;
    }

    p{
        line-height: 1.5rem;
        padding-inline: 1.5rem;
    }

    @media only screen and (min-width: 768px){
        .container{
            height: 615px;
        }

        .inner-container{
            padding-top: 3.5rem;
            padding-inline: 4.625rem;
        }
    
        h2{
            font-size: 2rem;
        }

        p{
            margin-top: 1.5rem;
        }

        .choices{
            margin-top: 4.375rem;
            margin-inline: 3.625rem;
        }
    }
</style>