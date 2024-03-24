<script lang="ts">
    import Steps from "../shared/Steps.svelte";
    import Button from "../shared/Button.svelte";

    import {steps} from "$lib/data/data"
</script>

<div class="container">
    <h3>How it works</h3>
    <div class="steps-container">
        {#each steps as step}
            <Steps
                step={step.step}
                heading={step.heading}
                para={step.para}
            />
        {/each}
    </div>
    <Button
        link={"/create-your-plan"}
        text={'Create your plan'}
    />
</div>

<style>
    .container{
        text-align: center;
    }

    h3{
        color: #83888F;
        font-size: 1.5rem;
        line-height: 2rem;
    }

    .steps-container{
        margin-top: 5rem;
    }
</style>