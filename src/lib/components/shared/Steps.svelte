<script lang="ts">
    export let step: string
    export let heading: string
    export let para: string
</script>

<div class="container">
    <h2>{step}</h2>
    <h3>{heading}</h3>
    <p>{para}</p>
</div>

<style>
    .container {
        text-align: center;
    }

    h2{
        font-size: 4.5rem;
        color: #FDD6BA;
        line-height: 4.5rem;
    }

    h3,
    p{
        color: #333D4B;
        margin-top: 1.5rem;
    }

    h3{
        font-size: 1.75rem;
    }

    p{
        line-height: 1.5rem;
        padding-inline: 1.5rem;
    }
</style>