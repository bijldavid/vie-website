<template>
    <section id="intro">
        <div class="container">
            <p class="sub-title">Waarom we er zijn</p>
            <h2>De energietransitie vraagt om meer dan alleen techniek</h2>
            <div>
                <p>
                    De kennis en oplossingen voor veel energievraagstukken zijn er vaak al. De uitdaging zit in het
                    samenbrengen van de juiste mensen, expertise en middelen om daadwerkelijk stappen te zetten. VIE
                    creëert die structuur en vormt een onafhankelijke schakel tussen publieke en private partijen.
                </p>
                <p>
                    Zo voorkomen we dat kennis versnipperd raakt of initiatieven stilvallen, en helpen we om
                    complexe
                    vraagstukken rondom onder andere netcongestie om te zetten in concrete kansen en samenwerkingen.
                </p>
            </div>
        </div>
    </section>
</template>

<script>

</script>

<style>
#intro {
    position: relative;
    padding: var(--block-padding) var(--inline-padding);
    background: var(--blue);
    z-index: 2;
}

#intro .container {
    display: grid;
    gap: 1rem;
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* TEXT CONTAINER                                      */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - */

#intro .container h2 {
    max-width: 35ch;
    color: var(--neutral-100);
}

#intro .container p {
    color: var(--neutral-100);
}

#intro .container p.sub-title {
    background: #473C6D;
    border: 1px solid #564981;
}

#intro .container div {
    display: grid;
    gap: 1rem;
}

@media (width > 1000px) {

    #intro .container {
        max-width: 1000px;
        margin-inline: auto;
    }

    #intro .container div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5rem;
    }
}
</style>