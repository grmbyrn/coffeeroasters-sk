<script lang="ts">
	import Hero from "$lib/components/shared/Hero.svelte";
	import OurHeadquarters from "$lib/components/about/OurHeadquarters.svelte";
</script>

<Hero
    bgImageMobile={'./assets/about/mobile/image-hero-whitecup.jpg'}
    bgImageTablet={'./assets/about/tablet/image-hero-whitecup.jpg'}
    bgImageDesktop={'./assets/about/desktop/image-hero-whitecup.jpg'}
    heading={'About Us'}
    paragraph={"Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."}
    button={false}
/>
<div class="container">
    <div class="commitment-container">
        <picture>
            <source media="(min-width: 1100px)" srcset="./assets/about/desktop/image-commitment.jpg">
            <source media="(min-width: 768px)" srcset="./assets/about/tablet/image-commitment.jpg">
            <img src="./assets/about/mobile/image-commitment.jpg" alt="barista">
        </picture>
        <div class="commitment-container-text">
            <h2>Our commitment</h2>
            <p>
                We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.
            </p>
        </div>
    </div>
    <div class="quality-container">
        <picture>
            <source media="(min-width: 1100px)" srcset="./assets/about/desktop/image-quality.jpg">
            <source media="(min-width: 768px)" srcset="./assets/about/tablet/image-quality.jpg">
            <img src="./assets/about/mobile/image-quality.jpg" alt="coffee cup">
        </picture>
        <div>
            <h2>Uncompromising quality</h2>
            <p>
                Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.
            </p>
        </div>
    </div>
    <OurHeadquarters />
</div>

<style>
    .container{
        text-align: center;
        padding-inline: 1.5rem;
    }

    .commitment-container{
        margin-top: 7.5rem;
        color: #333D4B;
    }

    .commitment-container img {
        border-radius: 8px;
        margin: 0 auto;
    }

    .commitment-container h2{
        font-size: 2rem;
        margin-top: 3rem;
        line-height: 3rem;
    }

    .commitment-container p{
        line-height: 1.5rem;
        margin-top: 1.875rem;
    }

    .quality-container{
        color: #FEFCF7;
        background-image: url('./assets/about/mobile/bg-quality.png');
        height: 500px;
        margin-top: 12.375rem;
        border-radius: 8px;
    }

    .quality-container img {
        margin-inline: 2.5rem;
        margin: 0 auto;
        position: relative;
        bottom: 5rem;
        width: 279px;
        border-radius: 8px;
    }

    .quality-container h2{
        font-size: 1.75rem;
        margin-top: -1rem;
        line-height: 1.75rem;
    }

    .quality-container p{
        line-height: 1.5rem;
        margin-top: 1.875rem;
        padding-inline: 1.5rem;
    }

    @media only screen and (min-width: 768px){
        .commitment-container{
            display: flex;
        }

        .commitment-container picture{
            flex: 1;
        }

        .commitment-container-text{
            flex: 1;
            text-align: left;
        }

        .quality-container img {
            width: 573px;
        }
    }
</style>