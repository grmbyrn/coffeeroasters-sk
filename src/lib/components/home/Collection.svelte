<script lang="ts">
    export let img: string
    export let heading: string
    export let para: string
</script>

<div class="container">
    <img src={img} alt="coffee">
    <div class="text-container">
        <h3>{heading}</h3>
        <p>{para}</p>
    </div>
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

    @media only screen and (min-width: 768px){
        .container{
            display: flex;
            flex-direction: row;
            padding-inline: 6.125rem;
            gap: 2.25rem;
        }

        .text-container{
            text-align: left;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        h3{
            margin-top: 0rem;
        }
    }
</style>