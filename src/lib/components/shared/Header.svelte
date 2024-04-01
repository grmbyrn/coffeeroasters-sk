<script lang="ts">
    let isMenuOpen: boolean = false

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen
    }
</script>

<header>
    <a href="/">
        <img src="./assets/shared/desktop/logo.svg" class="logo" alt="logo">
    </a>
    {#if !isMenuOpen}
        <button on:click={toggleMenu} class="open">
            <img src="./assets/shared/mobile/icon-hamburger.svg" alt="hamburger">
        </button>
    {:else}
        <button on:click={toggleMenu} class="close">
            <img src="./assets/shared/mobile/icon-close.svg" alt="close">
        </button>
    {/if}

    {#if isMenuOpen}
        <div class="modal">
            <ul class="nav-list">
                <li>
                    <a href="/" on:click={toggleMenu}>Home</a>
                </li>
                <li>
                    <a href="/about" on:click={toggleMenu}>About</a>
                </li>
                <li>
                    <a href="/create-your-plan" on:click={toggleMenu}>Create Your Plan</a>
                </li>
            </ul>
        </div>
    {/if}
</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 1.5rem 0 1.5rem;
    }

    .logo{
        width: 163px;
        z-index: 1000;
    }

    button{
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .close{
        z-index: 1000;
    }

    .modal{
        position: fixed;
        top: 5.5rem;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(255,255,255, 1), rgba(254, 252, 257, .5));
		z-index: 999;
		display: flex;
		align-items: flex-start; /* Center vertically */
		justify-content: center;
        color: #333D4B;
    }

    .nav-list {
		display: flex;
		flex-direction: column;
		text-align: center; /* Center text */
        padding: 0;
		padding-top: 40px;
		margin: 0;
		list-style: none;
	}

    .nav-list li {
		font-size: 1.25rem;
		padding-block: 1.5rem;
	}

    .nav-list li a {
		text-decoration: none;
		color: #333D4B;
        font-size: 1.5rem;
        font-weight: 800;
        line-height: 2rem;
	}

    @media only screen and (min-width: 768px){
        header{
            padding: 2.5rem 2.5rem 0 2.5rem;
        }

        .logo{
            width: 236px;
        }
    }

    @media only screen and (min-width: 768px){
        header{
            padding: 2.75rem 5rem 0 5rem;
        }
    }
</style>