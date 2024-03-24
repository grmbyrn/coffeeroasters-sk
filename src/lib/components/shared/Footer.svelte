<footer>
    <div>
        <a href="/">
            <img src="./assets/shared/desktop/logo.svg" class="logo" alt="logo">
        </a>
    </div>
    <div>
        <ul class="footer-list">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/create-your-plan">Create Your Plan</a>
            </li>
        </ul>
    </div>
    <div class="social-list">
        <img src="./assets/shared/desktop/icon-facebook.svg" alt="facebook">
        <img src="./assets/shared/desktop/icon-twitter.svg" alt="twitter">
        <img src="./assets/shared/desktop/icon-instagram.svg" alt="instagram">
    </div>
</footer>

<style>
    footer{
        background-color: #2C343E;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-block: 3.375rem;
        margin: 7.5rem 1.5rem 0rem 1.5rem;
    }

    .logo{
        filter: invert(1);
    }

    .footer-list,
    .social-list {
		display: flex;
		justify-content: center;
        padding: 0;
		padding-top: 40px;
		margin: 0;
		list-style: none;
        gap: 1.5rem;

	}

    .footer-list{
        flex-direction: column;
        align-items: center;
    }

    li a {
        color: #83888F;
        text-decoration: none;
    }

    li a:hover {
        color: #FEFCF7;
    }

    .social-list img:hover {
        filter: invert(1);
        cursor: pointer;
    }
</style>