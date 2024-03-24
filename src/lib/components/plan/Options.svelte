<script lang="ts">
    import Options from "$lib/components/plan/Option.svelte";

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
            selectedPrice = '$7.20'
            orderCompleted = true
        } else if (option === 'Every 2 weeks'){
            selectedPrice = '$9.60'
            orderCompleted = true
        } else if (option === 'Every month'){
            selectedPrice = '$12.00'
            orderCompleted = true
        }
    }
</script>

<div>
    <div>
        <h2>How do you drink your coffee?</h2>
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

    <div>
        <h2>What type of coffee?</h2>
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

    <div>
        <h2>How much would you like?</h2>
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

    <div>
        <h2>Want us to grind them?</h2>
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

    <div>
        <h2>How often should we deliver?</h2>
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


    <h1>"I drink my coffee as <span>{selectedMeans}</span>, with a <span>{selectedType}</span> type of bean. <span>{selectedAmount}</span> ground ala <span>{selectedGrind}</span>, sent to me <span>{selectedDelivery}</span>."</h1>

    {#if selectedMeans && selectedType && selectedAmount && selectedGrind && selectedDelivery}
        <div class="btn">
            <button on:click={() => handleOrder(selectedDelivery)}>Create my plan!</button>
        </div>        
    {:else}
        <h3>Please complete your order first</h3>
    {/if}

    {#if orderCompleted}
        <div>
            <h2>Order Summary</h2>
            <h1>"I drink my coffee as <span>{selectedMeans}</span>, with a <span>{selectedType}</span> type of bean. <span>{selectedAmount}</span> ground ala <span>{selectedGrind}</span>, sent to me <span>{selectedDelivery}</span>."</h1>
            <p>
                Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. 
            </p>
            <div>
                <p>{selectedPrice} / mo</p>
                <button>Checkout</button>
            </div>
        </div>
    {/if}
</div>

<style>
    span{
        color: green;
    }

    .btn{
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }
</style>