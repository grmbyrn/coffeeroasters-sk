<script lang="ts">
    export let img: string
    export let country: string
    export let street: string
    export let city: string
    export let postCode: string
    export let phoneNumber: string
</script>

<div class="container">
    <img src={img} alt="">
    <h3>{country}</h3>
    <div class="details-container">
        <p>{street}</p>
        <p>{city}</p>
        <p>{postCode}</p>
        <p>{phoneNumber}</p>
    </div>
</div>

<style>
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 4.5rem;
        color: #333D4B;
    }

    h3{
        margin-top: 3rem;
        font-size: 1.75rem;
        line-height: 2.25rem;
    }

    .details-container{
        margin-top: 1.375rem;
    }

    @media only screen and (min-width: 768px){
        .container{
            align-items: flex-start;
            flex: 1;
        }
    }
</style>