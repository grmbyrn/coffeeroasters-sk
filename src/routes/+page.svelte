<script lang="ts">
	import Hero from "$lib/components/shared/Hero.svelte";
	import OurCollection from "$lib/components/home/OurCollection.svelte";
	import WhyChooseUs from "$lib/components/home/WhyChooseUs.svelte";
	import HowItWorks from "$lib/components/home/HowItWorks.svelte";
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
<div class="how-it-works">
    <HowItWorks />
</div>

<style>
    .how-it-works{
        margin-top: 50rem;
    }
</style>