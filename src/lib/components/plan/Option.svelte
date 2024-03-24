<script lang="ts">
    export let handleClick: (option: string) => void;
    export let heading: string
    export let para: string
    export let isActive: boolean = false
</script>

<div class="options">
    <button class:active={isActive} on:click={() => handleClick(heading)}>
        <h3>{heading}</h3>
        <p>
            {para}
        </p>
    </button>
</div>

<style>
    .options {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
    }

    .active{
        background-color: green;
    }

    button{
        background-color: #F4F1EB;
        border: none;
        border-radius: 8px;
        text-align: left;
        padding: 1.5rem;
    }
</style>