<script lang="ts">
    import Steps from "../shared/Steps.svelte";
    import Button from "../shared/Button.svelte";

    import {steps} from "$lib/data/data"
</script>

<div class="container">
    <h3>How it works</h3>
    <div class="circles-line"></div> <!-- Added line div -->
    <div class="circles-container"> <!-- Added circles container -->
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
    </div>
    <hr class="circles-line">
    <div class="steps-container">
        {#each steps as step}
            <Steps
                step={step.step}
                heading={step.heading}
                para={step.para}
            />
        {/each}
    </div>
    <div class="btn-container">
        <Button
            link={"/create-your-plan"}
            text={'Create your plan'}
        />
    </div>
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

    .circles-line{
        display: none;
    }

    .steps-container{
        margin-top: 5rem;
    }

    .btn-container{
        margin-top: 5rem;
    }

    @media only screen and (min-width: 481px){
        .container{
            position: relative;
            bottom: 15rem;
            text-align: left;
            padding-inline: 2.5rem;
        }

        .circles-line{
            display: block;
            margin-right: 13rem;
            color: #FDD6BA;
        }

        .circles-container {
            display: flex;
            justify-content: left;
            margin-top: 1rem;
        }

        .circle {
            width: 31px;
            height: 31px;
            background-color: #FEFCF7;
            border: 2.5px solid #0E8784;
            border-radius: 50%;
            margin: 0 12.625rem 0 0;
            z-index: 100;
        }

        .steps-container{
            display: flex;
            gap: 10px;
        }

        .btn-container{
            margin-top: 2.75rem;
        }
    }
</style>