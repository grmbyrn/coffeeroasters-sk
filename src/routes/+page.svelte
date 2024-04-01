<script lang="ts">
	import Hero from "$lib/components/shared/Hero.svelte";
	import OurCollection from "$lib/components/home/OurCollection.svelte";
	import WhyChooseUs from "$lib/components/home/WhyChooseUs.svelte";
	import Steps from "$lib/components/shared/Steps.svelte";
    import Button from "$lib/components/shared/Button.svelte";

    import {steps} from "$lib/data/data"
</script>

<Hero
    bgImageMobile={'./assets/home/mobile/image-hero-coffeepress.jpg'}
    bgImageTablet={'./assets/home/tablet/image-hero-coffeepress.jpg'}
    bgImageDesktop={'./assets/home/desktop/image-hero-coffeepress.jpg'}
    heading={'Great coffee made simple.'}
    paragraph={"Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."}
    button={true}
/>
<OurCollection />
<WhyChooseUs />
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
<div class="btn-container">
    <Button
        link={"/create-your-plan"}
        text={'Create your plan'}
    />
</div>

<style>
    h3{
        color: #83888F;
        font-size: 1.5rem;
        line-height: 2rem;
        text-align: center;
        margin-top: 47.5rem;
    }

    .steps-container{
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 0 auto;
    }

    .btn-container{
        margin-top: 5rem;
        display: flex;
        justify-content: center;
    }

    @media only screen and (min-width: 768px){
        h3{
            margin-top: 27.5rem;
            text-align: left;
            padding-inline: 2.5rem;
        }

        .steps-container{
            flex-direction: row;
            gap: 5.9375rem;
            margin-top: 2rem;
            padding-inline: 2.5rem;
        }
    }
</style>