<template>
    <section id="samen">
        <div class="container">
            <div class="text-container">
                <p class="sub-title">Samen sterker</p>
                <h2>De energietransitie doen we samen</h2>
                <p>
                    We verbinden organisaties die allemaal vanuit een andere rol werken aan hetzelfde energiesysteem.
                </p>
            </div>
        </div>
        <div class="scroller" ref="scrollerRef" aria-label="Samenwerkingspartners">
            <ul class="scroller-inner">
                <li>
                    <p>Bedrijven</p>
                </li>
                <li>
                    <p>Energiepartners</p>
                </li>
                <li>
                    <p>Gemeenten</p>
                </li>
                <li>
                    <p>Provincies</p>
                </li>
                <li>
                    <p>Netbeheerders</p>
                </li>
                <li>
                    <p>Energiecoöperaties</p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const scrollerRef = ref(null)

onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const scroller = scrollerRef.value
    if (!scroller || scroller.dataset.animated === 'true') return

    scroller.dataset.animated = 'true'

    const inner = scroller.querySelector('.scroller-inner')
    if (!inner) return

    const originalItems = Array.from(inner.children)

    originalItems.forEach((item) => {
        const clone = item.cloneNode(true)
        clone.setAttribute('aria-hidden', 'true')
        inner.appendChild(clone)
    })
})
</script>

<style>
#samen {
    background: var(--neutral-200);
    padding: var(--block-padding) var(--inline-padding);
    padding-bottom: 0;
}

#samen .container {
    display: grid;
    gap: 1rem;
    justify-content: center;
    align-items: center;
}

#samen .container .sub-title {
    width: max-content;
    background: var(--neutral-300);
    border: 1px solid var(--neutral-400);
}

#samen .container p {
    max-width: 60ch;
}

#samen .scroller {
    container-type: inline-size;
    --marquee-duration: 40s;
    --marquee-direction: forwards;
}

#samen .scroller-inner {
    display: flex;
    flex-wrap: wrap;
    gap: 10cqw;
    padding-block: 6rem;
}

#samen .scroller-inner li {
    --timing-function: linear(0, 0.002 0.2%, 0.011 0.5%, 0.041 1%, 0.1 1.6%, 0.179 2.2%, 0.364 3.3%, 0.916 6.2%, 1.047 7%, 1.157 7.8%, 1.245 8.6%, 1.301 9.3%, 1.325 9.7%, 1.343 10.1%, 1.355 10.5%, 1.361 10.9%, 1.361 11.4%, 1.358 11.7%, 1.352 12%, 1.333 12.6%, 1.301 13.3%, 1.235 14.4%, 1.029 17.4%, 0.982 18.2%, 0.942 19%, 0.911 19.8%, 0.89 20.5%, 0.877 21.2%, 0.87 22%, 0.869 22.5%, 0.872 23.1%, 0.878 23.7%, 0.89 24.4%, 0.915 25.6%, 0.99 28.6%, 1.007 29.4%, 1.021 30.2%, 1.031 30.9%, 1.039 31.6%, 1.044 32.3%, 1.047 33.1%, 1.046 34.3%, 1.04 35.6%, 1.003 39.8%, 0.992 41.4%, 0.986 42.8%, 0.983 44.3%, 0.985 46.4%, 1.002 52.1%, 1.006 55.3%, 1.006 57.6%, 0.999 63.2%, 0.998 66.4%, 1.001 77.3%, 1);
    --animation-duration: 1s;
}

#samen .scroller-inner li p {
    --extrusion-depth: .5rem;
    --gap: -5px;
    position: relative;
    padding: 1em 2em;
    font-size: var(--sub-title-size);
    background: var(--blue);
    color: white;
    border-radius: 2px;
    pointer-events: none;
    transition: translate var(--animation-duration) var(--timing-function);
}

#samen .scroller-inner li p::before {
    content: '';
    position: absolute;
    top: 0;
    left: var(--gap);
    translate: -100%;
    height: 100%;
    width: var(--extrusion-depth);
    background: var(--orange);
    transform: skewY(45deg);
    border-radius: 2px;
    transform-origin: 100% 0;
    transition: width var(--animation-duration) var(--timing-function);
}

#samen .scroller-inner li p::after {
    content: '';
    position: absolute;
    top: var(--gap);
    left: 0;
    translate: 0 -100%;
    width: 100%;
    height: var(--extrusion-depth);
    background: var(--teal);
    transform: skewX(45deg);
    border-radius: 2px;
    transform-origin: 0 100%;
    transition: height var(--animation-duration) var(--timing-function);
}

#samen .scroller-inner li:hover p {
    translate: calc(-1 * var(--extrusion-depth)) calc(-1 * var(--extrusion-depth));
}

#samen .scroller-inner li:hover p::before {
    width: 0rem;
}

#samen .scroller-inner li:hover p::after {
    height: 0rem;
}

#samen .scroller[data-animated="true"] {
    overflow: hidden;
    -webkit-mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
    mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
}

#samen .scroller[data-animated="true"] .scroller-inner {
    width: max-content;
    flex-wrap: nowrap;
    animation: samen-scroll var(--marquee-duration) linear infinite;
}

#samen .scroller[data-animated="true"]:has(.scroller-inner li:hover) .scroller-inner,
#samen .scroller[data-animated="true"]:has(.scroller-inner li:focus-within) .scroller-inner {
    animation-play-state: paused;
}

@keyframes samen-scroll {
    to {
        transform: translateX(calc(-50% - .5rem));
    }
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* MARQUEE                                             */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - */

@media (width > 700px) {

    #samen .container {
        max-width: 1300px;
        margin-inline: auto;
    }

    #samen .container * {
        text-align: center;
    }

    #samen .container .sub-title {
        justify-self: center;
    }
}
</style>