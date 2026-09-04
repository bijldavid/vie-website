<template>
    <footer>
        <div class="container">
            <div>
                <img src="/images/vie-logo-white.png" alt="VIE-logo">
                <p class="tagline">Kennis.<br> Verbinding.<br> Samenwerking.<br> Versnelling.</p>
                <nav>
                    <h3>Navigatie</h3>
                    <ul>
                        <li>
                            <NuxtLink to="/#hero" class="nav-item">Home</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/#intro" class="nav-item">Waarom VIE</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/#rol" class="nav-item">Onze rol</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/#kennis" class="nav-item">Kennis</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/#samen" class="nav-item">Samen sterker</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/over" class="nav-item">Over ons</NuxtLink>
                        </li>
                    </ul>
                </nav>
                <address>
                    <h3>Contact</h3>
                    <div>
                        <a href="mailto:info@vrijheidinenergie.nl" class="nav-item">info@vrijheidinenergie.nl</a>
                        <p>+31 31 (0)20 000 00 00</p>
                        <p>Amsterdam, Nederland</p>
                    </div>
                </address>
            </div>
            <p>© 2026 VIE – Vrijheid in Energie</p>
        </div>

    </footer>
</template>

<script>

</script>

<style>
footer {
    padding: var(--block-padding) var(--inline-padding);
    background: var(--blue);
    padding-bottom: 2rem;
}

footer .container {
    display: grid;
}

footer .container div {
    display: grid;
    gap: 3rem;
    place-items: center;
}

footer .container div>* {
    flex: 1;
    text-align: center;
}

footer .container div img {
    max-width: 100px;
    object-fit: contain;

}

footer .container div .tagline {
    color: var(--neutral-100);
    font-weight: 600;
}

footer .container div :is(nav, address) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

footer .container div :is(nav h3, address h3) {
    color: var(--neutral-100);
    font-weight: 600;
    font-size: var(--p-size);
}

footer .container div :is(nav ul, address div) {
    display: flex;
    flex-direction: column;
    gap: .5rem;
}

footer .container div :is(nav ul li *, address div *) {
    color: var(--neutral-100);
    font-size: var(--p-size);
    text-decoration: none;
    justify-self: center;
}

footer .container div .nav-item {
    display: block;
    color: var(--neutral-100);
    text-decoration: underline color-mix(in srgb, var(--neutral-100) 20%, transparent 80%) solid .125em !important;
    text-underline-offset: .5em;
    width: max-content;
    line-height: 1.75em;
    transition: background-color 0.15s ease, text-decoration 0.15s ease;
}

footer .container div .nav-item:hover {
    text-decoration: underline color-mix(in srgb, var(--neutral-100) 60%, transparent 40%) solid .125em !important;
    background: color-mix(in srgb, var(--blue-accent) 30%, transparent 70%);
}

footer .container>p {
    position: relative;
    text-align: center;
    font-size: var(--sub-title-size);
    color: #9889c8;
    margin-top: 6rem;
}

footer .container>p::before {
    content: '';
    position: absolute;
    top: -2rem;
    left: 50%;
    width: 100vw;
    height: 1px;
    background: #564981;
    translate: -50%;
}

@media (width > 700px) {

    footer .container {
        max-width: 500px;
        margin-inline: auto;
    }

    footer .container div {
        display: grid;
        justify-content: center;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        place-items: start;
    }

    footer .container div :is(nav ul li *, address div *) {
        justify-self: start;
    }

    footer .container div img {
        height: 100%;
    }

    footer .container div>* {
        text-align: start;
    }

    footer .container div .tagline {
        align-self: center;
    }
}


@media (width > 1000px) {

    footer .container {
        max-width: 1000px;
    }

    footer .container div {
        display: flex;
        justify-content: space-between;
        gap: 8rem;
        align-items: start;
    }

    footer .container div img {
        height: auto;
    }

    footer .container div .tagline {
        align-self: start;
    }
}
</style>