<script lang="ts">
    let options = ['01 Preferences', '02 Bean Type', '03 Quantity', '04 Grind Option', '05 Deliveries']
</script>

<ul>
    {#each options as option}
        <li>{option}</li>
    {/each}
</ul>

<style>
    li{
        font-size: 2rem;
        color: #83888F;
        list-style: none;
    }

    li:hover{
        color: #333D48;
        cursor: pointer;
    }
</style>