<template>
    <section id="rol">
        <div class="container">
            <h2 class="sub-title">Onze rol</h2>
            <ul>
                <li>
                    <div class="title-container">
                        <img src="/images/kennis.svg" alt="">
                        <h3>Kennis delen</h3>
                    </div>
                    <div class="image-container">
                        <img src="/images/kennis-infographic.png" alt="">
                    </div>
                    <p>We verzamelen en delen relevante kennis en inzichten over de energietransitie.</p>
                </li>
                <li>
                    <div class="title-container">
                        <img src="/images/partijen.svg" alt="">
                        <h3>Partijen verbinden</h3>
                    </div>
                    <div class="image-container">
                        <img src="/images/partijen-infographic.png" alt="">
                    </div>
                    <p>We brengen de juiste organisaties, experts en initiatiefnemers met elkaar in contact.</p>
                </li>
                <li>
                    <div class="title-container">
                        <img src="/images/projecten.svg" alt="">
                        <h3>Projecten aanjagen</h3>
                    </div>
                    <div class="image-container">
                        <img src="/images/projecten-infographic.png" alt="">
                    </div>
                    <p>We helpen initiatieven verder door kansen te verkennen, partners te vinden en trajecten op te
                        zetten.</p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>

</script>

<style>
#rol {
    position: relative;
    padding: var(--block-padding) var(--inline-padding);
    z-index: 2;
}

#rol .container {
    display: grid;
    gap: 1rem;
}

#rol .container ul {
    display: flex;
    flex-direction: column;
}

#rol .container ul li {
    display: flex;
    flex-direction: column;
}

#rol .container ul li .title-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid var(--neutral-300);
}

#rol .container ul li:nth-of-type(1) .title-container img {
    padding: .5rem;
    height: 2.5rem;
    background: var(--blue);
}

#rol .container ul li:nth-of-type(2) .title-container img {
    padding: .5rem;
    height: 2.5rem;
    background: var(--orange);
}

#rol .container ul li:nth-of-type(3) .title-container img {
    padding: .5rem;
    height: 2.5rem;
    background: var(--teal);
}

#rol .container ul li:nth-of-type(1) .title-container h3 {
    color: var(--blue);
}

#rol .container ul li:nth-of-type(2) .title-container h3 {
    color: var(--orange);

}

#rol .container ul li:nth-of-type(3) .title-container h3 {
    color: var(--teal-accent);
}

#rol .container ul li .image-container {
    padding: 1rem;
    height: 250px;
    border-inline: 1px solid var(--neutral-300);
}

#rol .container ul li .image-container img {
    background: var(--neutral-200);
    padding: 1rem;
    height: 100%;
    width: 100%;
    object-fit: contain;
}

#rol .container ul li:nth-of-type(3) .image-container img {
    padding-inline: 10%;
}

#rol .container ul li>p {
    padding: 1rem;
    border: 1px solid var(--neutral-300);
    background: var(--neutral-200);
    flex-grow: 1;
}

#rol .container ul li:not(:last-of-type)>p {
    border-bottom: none;
}


@media (width > 700px) {

    #rol .container {
        max-width: 1300px;
        margin-inline: auto;
    }

    #rol .container ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }


    #rol .container ul li:nth-of-type(2) .title-container {
        border-left: none;
    }

    #rol .container ul li:nth-of-type(2) .image-container {
        border-left: none;
    }

    #rol .container ul li:nth-of-type(2)>p {
        border-left: none;
    }

    #rol .container ul li:nth-of-type(3) .title-container {
        border-top: none;
    }

}

@media (width > 1000px) {
    #rol .container ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    #rol .container ul li:nth-of-type(2) .title-container {
        border-inline: none;
    }

    #rol .container ul li:nth-of-type(2) .image-container {
        border-inline: none;
    }

    #rol .container ul li:nth-of-type(2)>p {
        border-inline: none;
    }

    #rol .container ul li:nth-of-type(3) .title-container {
        border-top: 1px solid var(--neutral-300);
    }

    #rol .container ul li:not(:last-of-type)>p {
        border-bottom: 1px solid var(--neutral-300);
    }
}
</style>