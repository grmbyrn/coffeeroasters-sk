<script lang="ts">
    export let link: string
    export let text: string
</script>

<button disabled>
    <a href={link}>{text}</a>
</button>

<style>
    button{
        padding: 1rem 2rem;
        border-radius: 6px;
        border: none;
        background-color: #0E8784;
        margin-top: 2rem;
    }

    button a {
        text-decoration: none;
        color: #FEFCF7;
        font-family: "Fraunces", serif;
        font-size: 18px;
    }

    button:hover{
        background-color: #66D2CF;
        cursor: pointer;
    }
</style>