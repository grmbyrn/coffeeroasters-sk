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
        background-color: #0E8784;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin: 4rem 1.5rem 0 1.5rem;
        padding: 4.5rem 2rem 3.125rem 2rem;
        border-radius: 8px;
        color: #FEFCF7;
    }

    h3{
        font-size: 1.5rem;
        line-height: 2rem;
        margin-top: 3.5rem;
    }

    p{
        line-height: 1.5rem;
        margin-top: 1.5rem;
    }

    @media only screen and (min-width: 768px){
        .container{
            flex-direction: row;
            padding: 2.5rem 3rem;
            gap: 3.4375rem;
            margin: 4rem 1.5rem 0 1.5rem;
        }

        .text-container{
            text-align: left;
        }

        h3{
            margin-top: 0;
        }
    }
</style>