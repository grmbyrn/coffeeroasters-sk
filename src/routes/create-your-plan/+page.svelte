<script lang="ts">
    import Hero from "$lib/components/shared/Hero.svelte";
	import Steps from "$lib/components/shared/Steps.svelte";

    import {steps} from '$lib/data/data'
	import Options from "$lib/components/plan/Options.svelte";
</script>

<Hero
    bgImageMobile={'./assets/plan/mobile/image-hero-blackcup.jpg'}
    bgImageTablet={'./assets/plan/tablet/image-hero-blackcup.jpg'}
    bgImageDesktop={'./assets/plan/desktop/image-hero-blackcup.jpg'}
    heading={'Create a plan'}
    paragraph={"Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door."}
    button={false}
/>
<div class="steps-container">
    {#each steps as step}
        <Steps
            step={step.step}
            heading={step.heading}
            para={step.para}
        />
    {/each}
</div>
<Options />

<style>
    .steps-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0 auto;
    }

    @media only screen and (min-width: 768px){
        .steps-container{
            flex-direction: row;
            gap: 5.9375rem;
            padding-inline: 2rem;
        }
    }
</style>
