<script lang="ts">
    import Button from "../shared/Button.svelte";

    export let selectedMeans = '';
    export let selectedType = '';
    export let selectedAmount = '';
    export let selectedGrind = '';
    export let selectedDelivery = '';
    export let selectedPrice = '';
</script>

<div class="backdrop"></div>
<div class="modal">
    <h3>Order Summary</h3>
    <h2>"I drink my coffee as <span>{selectedMeans}</span>, with a <span>{selectedType}</span> type of bean. <span>{selectedAmount}</span> ground ala <span>{selectedGrind}</span>, sent to me <span>{selectedDelivery}</span>."</h2>
    <p>
        Is this correct? You can proceed to checkout or go back to <a href="/create-your-plan">plan selection</a> if something is off. Subscription discount codes can also be redeemed at the checkout. 
    </p>
    <div class="btn">
        <Button link={'/'} text={`Checkout - ${selectedPrice} / mo`} />
    </div>
</div>

<style>
    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(51, 61, 75, .95); /* Yellow with transparency */
        z-index: 998; /* Ensure the backdrop is behind the modal */
    }

    .modal {
        position: fixed;
        top: 50%; /* Center vertically */
        left: 50%; /* Center horizontally */
        transform: translate(-50%, -50%); /* Center the modal */
        width: 75%;
        max-width: 600px; /* Example max-width */
        height: auto; /* Adjust height as needed */
        background-color: #FEFCF7;        
        z-index: 999;
        display: flex;
        flex-direction: column;
        align-items: center; /* Center content horizontally */
        color: #333D4B;
        border-radius: 8px;
    }


    .modal h3{
        background-color: #979797;
        color: #ffffff;
        width: 100%;
        padding: 1.75rem 1.5rem;
        margin-top: 0;
        border-radius: 8px 8px 0 0;
    }

    .modal h2,
    .modal p{
        padding-inline: 1.5rem;
    }

    .modal h2 {
        line-height: 2.5rem;
        color: #83888F;
    }

    .modal p {
        line-height: 1.5rem;
        color: #333D4B;
    }

    .modal p a {
        color: #0E8784;
        line-height: 1.5rem;
    }

    .btn {
        margin-bottom: 1.5rem;
    }

    span{
        color: #0E8784;
    }
</style>