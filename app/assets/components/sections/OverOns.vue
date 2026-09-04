<template>
    <section id="over-ons">
        <div class="container">
            <div class="text-container">
                <p class="sub-title">Over ons</p>
                <h2>Een onafhankelijke verbinder in de energietransitie</h2>
                <p>
                    VIE – Vrijheid in Energie is een onafhankelijk kennis- en netwerkplatform dat publieke en private
                    partijen over-onsbrengt rond actuele energievraagstukken. We creëren een plek waar kennis, expertise
                    en
                    initiatieven bij elkaar komen en helpen over-onswerkingen en projecten verder op weg.
                </p>
                <p>
                    Doordat VIE niet aan één provincie, programma of organisatie is gebonden, kunnen we vrij schakelen
                    tussen verschillende partijen en belangen. Zo vormen we een onafhankelijke schakel tussen kennis,
                    netwerk en uitvoering.
                </p>
                <NuxtLink to="/over" class="button">Lees meer →</NuxtLink>
            </div>
            <div class="image-container">
                <img src="/images/about1.webp" class="img-a" />
                <img src="/images/about2.webp" class="img-b" />
                <img src="/images/about3.webp" class="img-c" />
            </div>
        </div>
    </section>
</template>

<script>

</script>

<style>
#over-ons {
    position: relative;
    padding: var(--block-padding) var(--inline-padding);
}

#over-ons .container {
    container-type: inline-size;
    display: grid;
    gap: 3rem;
    align-items: center;
}

#over-ons .container div {
    display: grid;
    gap: 1rem;
}

#over-ons .container p {
    max-width: 60ch;
}

#over-ons .container .image-container {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    gap: 0;
    width: 100%;
    height: 65cqw;
}

#over-ons .container .image-container img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    filter: drop-shadow(0px 30px 40px rgba(0, 0, 0, 0.20));
}

.img-a {
    grid-column: 1 / 5;
    grid-row: 3 / 9;
    z-index: 1;
}

.img-b {
    grid-column: 4 / 8;
    grid-row: 5 / 11;
    z-index: 2;
}

.img-c {
    grid-column: 6 / 11;
    grid-row: 1 / 9;
    z-index: 3;
}

@media (width > 1000px) {
    #over-ons .container {
        max-width: 1300px;
        margin-inline: auto;
        grid-template-columns: 1fr 1.25fr;
        gap: 5rem;
    }

    #over-ons .container .image-container {
        height: 32.5cqw;
    }

    #over-ons .container .image-container img {
        border-radius: 10px;
    }
}
</style>