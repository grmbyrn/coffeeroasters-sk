<script lang="ts">
    import Button from "./Button.svelte";
    
    export let bgImageMobile: string
    export let bgImageTablet: string
    export let bgImageDesktop: string
    export let heading: string
    export let paragraph: string
    export let button: boolean
</script>

<div class="container">
    <picture>
        <source media="(min-width: 1100px)" srcset={bgImageDesktop}>
        <source media="(min-width: 481px)" srcset={bgImageTablet}>
        <img src={bgImageMobile} alt="hero">
    </picture>
    <div class="container-text">
        <h1>{heading}</h1>
        <p>{paragraph}</p>
        {#if button}
            <Button
                link={"/create-your-plan"}
                text={'Create your plan'}
            />
        {/if}
    </div>
</div>

<style>
    .container{
        position: relative;
        margin-top: 40px;
        margin-inline: 1.5rem;
    }

    .container img {
        max-width: 100%;
        height: 400px;
        width: 327px;
        border-radius: 10px;
    }

    img{
        object-fit: fill;
        margin: 0 auto;
    }

    .container-text{
        position: absolute;
        top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        color: #FEFCF7;
        padding: 3.5rem 1.5rem 0 1.5rem;
    }

    h1{
        font-size: 3rem;
    }

    p{
        margin-top: 1.5rem;
    }

    @media only screen and (min-width: 481px){
        .container img {
            width: 689px;
            height: 500px;
            border-radius: 10px;
        }
        
        .container-text{
            padding: 6.5rem 14.5625rem 6.5rem 3.625rem;
            text-align: left;
            align-items: flex-start;
        }
    }
</style>