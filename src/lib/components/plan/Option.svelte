<script lang="ts">
    export let handleClick: (option: string) => void;
    export let heading: string
    export let para: string
    export let activeOption: string;
</script>

<div class="option">
    <button class:active={activeOption === heading} on:click={() => handleClick(heading)}>
        <h3>{heading}</h3>
        <p>
            {para}
        </p>
    </button>
</div>

<style>
    .option {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
    }
    
    button{
        background-color: #F4F1EB;
        border: none;
        border-radius: 8px;
        text-align: left;
        padding: 1.5rem;
        cursor: pointer;
    }
    
    @media only screen and (min-width: 768px){
        .option{
            width: 223px;
        }
    }
    
    @media only screen and (min-width: 1100px){
        .option{
            height: 250px;
        }
    }
</style>