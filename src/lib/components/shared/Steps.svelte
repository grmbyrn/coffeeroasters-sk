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

    @media only screen and (min-width: 768px){
        .container{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            text-align: left;
            height: 355px;
            margin-top: 5.125rem;
        }

        h2{
            margin-top: 0;
            flex: 1;

        }

        h3{
            flex: 1;
            margin-top: 2.375rem;
        }

        p{
            padding-inline: 0;
            margin-top: 2.625rem;
            flex: 1;
        }
    }
</style>