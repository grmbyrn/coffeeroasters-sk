<script lang="ts">
    export let img: string
    export let heading: string
    export let para: string
</script>

<div class="container">
    <img src={img} alt="coffee">
    <h3>{heading}</h3>
    <p>{para}</p>
</div>

<style>
    .container{
        text-align: center;
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-inline: 2.875rem;
    }

    img{
        width: 200px;
    }

    h3,
    p{
        color: #333D4B;
    }

    h3{
        margin-top: 1.5rem;
        font-size: 1.5rem;
        line-height: 2rem;
    }

    p{
        line-height: 1.5rem;
    }
</style>