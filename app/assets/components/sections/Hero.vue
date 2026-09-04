<template>
    <section id="hero">
        <div class="container">
            <div class="text-container">
                <p>Kennis <span>→</span> Verbinding <span>→</span> Samenwerking <span>→</span> Versnelling</p>
                <h1>Vrijheid <span>in</span> <span>energie</span></h1>
            </div>
        </div>
        <div class="image-cards">
            <div class="image-card" data-index="-3">
                <img src="/images/grassy-field.webp" alt="">
            </div>
            <div class="image-card" data-index="-2">
                <img src="/images/steam.webp" alt="">
            </div>
            <div class="image-card" data-index="-1">
                <img src="/images/hoogspanning.webp" alt="">
            </div>
            <div class="image-card" data-index="0">
                <img src="/images/flower-field.webp" alt="">
            </div>
            <div class="image-card" data-index="1">
                <img src="/images/solar-panels.webp" alt="">
            </div>
            <div class="image-card" data-index="2">
                <img src="/images/field.webp" alt="">
            </div>
            <div class="image-card" data-index="3">
                <img src="/images/solar-field.webp" alt="">
            </div>
        </div>
    </section>
</template>

<script>

</script>

<style>
#hero {
    position: relative;
    padding-top:calc(var(--block-padding) + 5rem);
    padding-bottom: 0;
    z-index: 1;
    display: grid;
    justify-content: center;
    gap: 3rem;
    background-image:
        linear-gradient(to bottom, var(--neutral-100), transparent 50%),
        url('/images/repeating-dot.webp');
    background-size: 15px;
}

#hero .container {
    position: relative;
    display: grid;
    gap: 2rem;
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* TEXT CONTAINER                                      */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - */

#hero .container .text-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
    padding-inline: var(--inline-padding);
}

#hero .container .text-container * {
    text-align: center;
}

#hero .container .text-container h1 {
    color: var(--blue);
    font-size: var(--h1-size);
}

#hero .container .text-container h1 span:nth-of-type(1) {
    color: var(--orange);
}

#hero .container .text-container h1 span:nth-of-type(2) {
    color: var(--teal);
}

#hero .container .text-container p {
    font-size: var(--p-size);
    max-width: 25ch;
}

#hero .container .text-container p span {
    margin-inline: .5rem;
}

#hero .container .text-container p span:nth-of-type(1) {
    color: var(--blue);
}

#hero .container .text-container p span:nth-of-type(2) {
    color: var(--orange);
}

#hero .container .text-container p span:nth-of-type(3) {
    color: var(--teal-accent);
    /* color: var(--teal); */
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* IMAGE CARDS                                         */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - */

#hero .image-cards {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    padding-top: 2rem;
    padding-inline: 3rem;
}

#hero .image-card {
    --card-size: 225px;
    --unit: calc(var(--card-size) * 0.1875);
    width: var(--card-size);
    height: var(--card-size);
    flex-shrink: 0;
    border-radius: 30px;
    background: #dcdcdc;
    border-radius: 20px 20px 0 0;
    overflow: hidden;
    filter: drop-shadow(0px 30px 20px rgba(0, 0, 0, 0.40));
}

#hero .image-card[data-index="0"] {
    z-index: 3;
}

#hero .image-card[data-index="-1"] {
    margin-right: calc(-1 * var(--card-size) * 0.675);
    margin-bottom: calc(-1 * var(--card-size) * 0.1875);
    z-index: 2;
}

#hero .image-card[data-index="1"] {
    margin-left: calc(-1 * var(--card-size) * 0.675);
    margin-bottom: calc(-1 * var(--card-size) * 0.1875);
    z-index: 2;
}

#hero .image-card[data-index="-2"] {
    margin-right: calc(-1 * var(--card-size) * 0.7625);
    margin-bottom: calc(-1 * var(--card-size) * 0.475);
    z-index: 1;
}

#hero .image-card[data-index="2"] {
    margin-left: calc(-1 * var(--card-size) * 0.7625);
    margin-bottom: calc(-1 * var(--card-size) * 0.475);
    z-index: 1;
}

#hero .image-card[data-index="-3"] {
    margin-right: calc(-1 * var(--card-size) * 0.85);
    margin-bottom: calc(-1 * var(--card-size) * 0.725);
    z-index: 0;
}

#hero .image-card[data-index="3"] {
    margin-left: calc(-1 * var(--card-size) * 0.85);
    margin-bottom: calc(-1 * var(--card-size) * 0.725);
    z-index: 0;
}


#hero .image-card img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (width > 470px) {
    #hero .container .text-container p {
        max-width: 100%;
    }
}

@media (width > 700px) {

    #hero .container {
        max-width: 1200px;
        margin-inline: auto;
    }

    #hero .image-card[data-index="-1"] {
        margin-right: calc(-1 * var(--card-size) * 0.375);
        margin-bottom: calc(-1 * var(--card-size) * 0.1875);
    }

    #hero .image-card[data-index="1"] {
        margin-left: calc(-1 * var(--card-size) * 0.375);
        margin-bottom: calc(-1 * var(--card-size) * 0.1875);
    }

    #hero .image-card[data-index="-2"] {
        margin-right: calc(-1 * var(--card-size) * 0.5625);
        margin-bottom: calc(-1 * var(--card-size) * 0.375);
    }

    #hero .image-card[data-index="2"] {
        margin-left: calc(-1 * var(--card-size) * 0.5625);
        margin-bottom: calc(-1 * var(--card-size) * 0.375);
    }

    #hero .image-card[data-index="-3"] {
        margin-right: calc(-1 * var(--card-size) * 0.75);
        margin-bottom: calc(-1 * var(--card-size) * 0.625);
    }

    #hero .image-card[data-index="3"] {
        margin-left: calc(-1 * var(--card-size) * 0.75);
        margin-bottom: calc(-1 * var(--card-size) * 0.625);
    }
}

@media (width > 1000px) {

    #hero .image-card {
        --card-size: 300px;
    }
}

@media (width > 1300px) {

    #hero .image-card {
        --card-size: 400px;
    }
}
</style>