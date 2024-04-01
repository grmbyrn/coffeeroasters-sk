<script lang="ts">
    import Options from "$lib/components/plan/Option.svelte";
	import OrderConfirmation from "./OrderConfirmation.svelte";

    let selectedMeans = '';
    let selectedType = '';
    let selectedAmount = '';
    let selectedGrind = '';
    let selectedDelivery = '';
    let selectedPrice = '';

    let orderCompleted: boolean = false

    const handleDrinkingMeansClick = (option: string) => {
        selectedMeans = option;
    }

    const handleTypeClick = (option: string) => {
        selectedType = option;
    }

    const handleAmountClick = (option: string) => {
        selectedAmount = option;
    }

    const handleGrindClick = (option: string) => {
        selectedGrind = option;
    }

    const handleDeliveryClick = (option: string) => {
        selectedDelivery = option;
    }

    const handleOrder = (option: string) => {
        if(option === 'Every week'){
            selectedPrice = '$28.80'
            orderCompleted = true
        } else if (option === 'Every 2 weeks'){
            selectedPrice = '$19.20'
            orderCompleted = true
        } else if (option === 'Every month'){
            selectedPrice = '$12.00'
            orderCompleted = true
        }
    }
</script>

<div class="container">
    <h2>How do you drink your coffee?</h2>
    <div class="options-container">
        <Options
            handleClick={handleDrinkingMeansClick}            
            heading={'Capsule'}
            para={'Compatible with Nespresso systems and similar brewers'}
        />
        <Options
            handleClick={handleDrinkingMeansClick}
            heading={'Filter'}
            para={'For pour over or drip methods like Aeropress, Chemex, and V60'}
        />
        <Options
            handleClick={handleDrinkingMeansClick}
            heading={'Espresso'}
            para={'Dense and finely ground beans for an intense, flavorful experience'}
        />
    </div>

    <h2>What type of coffee?</h2>
    <div class="options-container">
        <Options
            handleClick={handleTypeClick}
            heading={'Single Origin'}
            para={'Distinct, high quality coffee from a specific family-owned farm'}
        />
        <Options
            handleClick={handleTypeClick}
            heading={'Decaf'}
            para={'Just like regular coffee, except the caffeine has been removed'}
        />
        <Options
            handleClick={handleTypeClick}
            heading={'Blended'}
            para={'Combination of two or three dark roasted beans of organic coffees'}
        />
    </div>

    <h2>How much would you like?</h2>
    <div class="options-container">
        <Options
            handleClick={handleAmountClick}
            heading={'250g'}
            para={'Perfect for the solo drinker. Yields about 12 delicious cups.'}
        />
        <Options
            handleClick={handleAmountClick}
            heading={'500g'}
            para={'Perfect option for a couple. Yields about 40 delectable cups.'}
        />
        <Options
            handleClick={handleAmountClick}
            heading={'1000g'}
            para={'Perfect for offices and events. Yields about 90 delightful cups.'}
        />
    </div>

    <h2>Want us to grind them?</h2>
    <div class="options-container">
        <Options
            handleClick={handleGrindClick}
            heading={'Wholebean'}
            para={'Best choice if you cherish the full sensory experience'}
        />
        <Options
            handleClick={handleGrindClick}
            heading={'Filter'}
            para={'For drip or pour-over coffee methods such as V60 or Aeropress'}
        />
        <Options
            handleClick={handleGrindClick}
            heading={'Cafetiére'}
            para={'Course ground beans specially suited for french press coffee'}
        />
    </div>

    <h2>How often should we deliver?</h2>
    <div class="options-container">
        <Options
            handleClick={handleDeliveryClick}
            heading={'Every week'}
            para={'$7.20 per shipment. Includes free first-class shipping.'}
        />
        <Options
            handleClick={handleDeliveryClick}
            heading={'Every 2 weeks'}
            para={'$9.60 per shipment. Includes free priority shipping.'}
        />
        <Options
            handleClick={handleDeliveryClick}
            heading={'Every month'}
            para={'$12.00 per shipment. Includes free priority shipping.'}
        />
    </div>

    <div class="choice-container">
        <p>ORDER SUMMARY</p>
        <h2>"I drink my coffee as <span>{selectedMeans ? selectedMeans : ' _____ '}</span>, with a <span>{selectedType ? selectedType : ' _____ '}</span> type of bean. <span>{selectedAmount ? selectedAmount : ' _____ '}</span> ground ala <span>{selectedGrind ? selectedGrind : ' _____ '}</span>, sent to me <span>{selectedDelivery ? selectedDelivery : ' _____ '}</span>."</h2>
    </div>

    {#if selectedMeans && selectedType && selectedAmount && selectedGrind && selectedDelivery}
        <div class="btn">
            <button on:click={() => handleOrder(selectedDelivery)}>Create my plan!</button>
        </div>
    {:else}
        <h3 style="text-align: center;">Please complete your order first</h3>
    {/if}

    {#if orderCompleted}
        <OrderConfirmation
            {selectedMeans}
            {selectedType}
            {selectedAmount}
            {selectedGrind}
            {selectedDelivery}
            {selectedPrice}
        />
    {/if}
</div>

<style>
    .container{
        margin-top: 7.5rem;
    }

    .options-container{
        margin-top: 2rem;
    }

    h2{
        color: #83888F;
        font-size: 1.5rem;
        line-height: 1.75rem;
        font-weight: 800;
        margin-top: 7.5rem;
    }

    .choice-container{
        color: #FEFCF7;
        background-image: url('./assets/about/mobile/bg-quality.png');
        height: 400px;
        margin-top: 7.5rem;
        border-radius: 8px;
        margin-inline: 1.5rem;
    }

    .choice-container p{
        line-height: 1.5rem;
        color: #83888F;
        padding: 2rem 2rem 0 2rem;
    }

    .choice-container h2 {
        font-size: 1.5rem;
        line-height: 2.5rem;
        padding: 0 1rem 2rem 2rem;
    }

    span{
        color: #0E8784;
    }

    .btn{
        margin: 0 auto;
        display: flex;
        justify-content: center;
        padding: 1rem 2rem;
        border-radius: 6px;
        border: none;
        margin-top: 3.5rem;
    }

    .btn button {
        padding: 1rem 2rem;
        border-radius: 6px;
        border: none;
        background-color: #0E8784;
        color: #FEFCF7;
        font-family: "Fraunces", serif;
        font-size: 18px;
        font-weight: 700;
    }

    .btn button:hover{
        background-color: #66D2CF;
        cursor: pointer;
    }

    @media only screen and (min-width: 768px){
        .container{
            padding-inline: 2rem;
        }

        .options-container{
            display: flex;
            gap: 10px;
            justify-content: space-between;
        }
    }
</style>