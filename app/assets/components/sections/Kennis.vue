<template>
    <section id="kennis">
        <div class="container">
            <p class="sub-title">Kennisplatform</p>
            <h2>Kennis voor een energiesysteem in beweging</h2>
            <search>
                <fieldset class="no-scrollbar" ref="filterFieldset">
                    <legend class="visually-hidden">Filter op categorie</legend>
                    <label for="filter-netcongestie">
                        <input type="checkbox" id="filter-netcongestie" name="filter" value="netcongestie" checked>
                        Netcongestie
                    </label>
                    <label for="filter-energiehubs">
                        <input type="checkbox" id="filter-energiehubs" name="filter" value="energiehubs">
                        Energiehubs
                    </label>
                    <label for="filter-energiehubs">
                        <input type="checkbox" id="filter-energiehubs" name="filter" value="energiehubs">
                        Subsidies & financiering
                    </label>
                    <label for="filter-energiehubs">
                        <input type="checkbox" id="filter-energiehubs" name="filter" value="energiehubs">
                        Lokale energieoplossingen
                    </label>
                    <label for="filter-energiehubs">
                        <input type="checkbox" id="filter-energiehubs" name="filter" value="energiehubs">
                        Samenwerking
                    </label>
                    <label for="filter-energiehubs">
                        <input type="checkbox" id="filter-energiehubs" name="filter" value="energiehubs">
                        Data & digitalisering
                    </label>
                    <label for="filter-energiehubs">
                        <input type="checkbox" id="filter-energiehubs" name="filter" value="energiehubs">
                        Innovatie
                    </label>
                </fieldset>

                <form role="search" action="/zoeken" method="get">
                    <label for="artikel-zoeken" class="visually-hidden">Zoek een artikel</label>
                    <input type="search" id="artikel-zoeken" name="q" placeholder="Zoek een artikel">
                    <button type="submit">
                        <img src="" alt="">
                    </button>
                </form>
            </search>
            <span class="hr"></span>
            <ul>
                <li v-for="(item, index) in kennisItems" :key="`${item.heading}-${index}`">
                    <article>
                        <div class="image-container">
                            <img :src="item.thumbnail" :alt="item.heading">
                        </div>
                        <div class="text-container">
                            <h3>{{ item.heading }}</h3>
                            <p>{{ item.intro }}</p>
                        </div>
                    </article>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
const kennisItems = [
    {
        thumbnail: '/images/kennis/netcongestie-1.jpg',
        heading: 'Netcongestie: van knelpunt naar kans',
        intro: 'Hoe lokale samenwerking ruimte kan creeren op een steeds voller elektriciteitsnet.'
    },
    {
        thumbnail: '/images/kennis/netcongestie-2.jpg',
        heading: 'Slimmer sturen op lokaal energiegebruik',
        intro: 'Praktische voorbeelden van vraagsturing die piekbelasting verlaagt.'
    },
    {
        thumbnail: '/images/kennis/netcongestie-3.jpg',
        heading: 'Energiehubs als versneller voor de regio',
        intro: 'Waarom collectieve oplossingen bedrijven en netbeheerders vooruithelpen.'
    },
    {
        thumbnail: '/images/kennis/netcongestie-4.jpg',
        heading: 'Data als kompas voor netcapaciteit',
        intro: 'Met inzicht in verbruik en opwek worden betere keuzes mogelijk.'
    },
    {
        thumbnail: '/images/kennis/netcongestie-5.jpg',
        heading: 'Van pilot naar schaalbare aanpak',
        intro: 'Wat nodig is om succesvolle initiatieven structureel uit te rollen.'
    },
    {
        thumbnail: '/images/kennis/netcongestie-6.jpg',
        heading: 'Samenwerken aan een toekomstbestendig net',
        intro: 'De rol van overheid, ondernemers en netbeheerders in de energietransitie.'
    },
    {
        thumbnail: '/images/kennis/netcongestie-4.jpg',
        heading: 'Data als kompas voor netcapaciteit',
        intro: 'Met inzicht in verbruik en opwek worden betere keuzes mogelijk.'
    },
    {
        thumbnail: '/images/kennis/netcongestie-5.jpg',
        heading: 'Van pilot naar schaalbare aanpak',
        intro: 'Wat nodig is om succesvolle initiatieven structureel uit te rollen.'
    },
    {
        thumbnail: '/images/kennis/netcongestie-6.jpg',
        heading: 'Samenwerken aan een toekomstbestendig net',
        intro: 'De rol van overheid, ondernemers en netbeheerders in de energietransitie.'
    }
]

import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const filterFieldset = ref(null)
let resizeObserver

function updateScrollIndicators() {
    const el = filterFieldset.value
    if (!el) return

    const maxScroll = el.scrollWidth - el.clientWidth

    if (maxScroll <= 0) {
        el.classList.remove('can-scroll-left', 'can-scroll-right')
        return
    }

    const scrolledRatio = el.scrollLeft / maxScroll
    const threshold = 0.33

    el.classList.toggle('can-scroll-left', scrolledRatio > threshold)
    el.classList.toggle('can-scroll-right', scrolledRatio < 1 - threshold)
}

let ticking = false
function onScroll() {
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => {
        updateScrollIndicators()
        ticking = false
    })
}

onMounted(async () => {
    await nextTick()
    updateScrollIndicators()

    filterFieldset.value?.addEventListener('scroll', onScroll, { passive: true })

    resizeObserver = new ResizeObserver(updateScrollIndicators)
    if (filterFieldset.value) resizeObserver.observe(filterFieldset.value)
})

onBeforeUnmount(() => {
    filterFieldset.value?.removeEventListener('scroll', onScroll)
    resizeObserver?.disconnect()
})
</script>

<style>
#kennis {
    padding: var(--block-padding) var(--inline-padding);
    z-index: 2;
}

#kennis .container {
    display: grid;
    gap: 1rem;
}

#kennis .container search {
    position: relative;
    display: grid;
    gap: 1rem;
    width: 100%;
}

#kennis .container search::before,
#kennis .container search::after {
    z-index: 1;
    content: '';
    position: absolute;
    bottom: 0;
    height: calc(3rem + 2px);
    width: 10rem;
    pointer-events: none;
    opacity: 0;
    transition: opacity .3s ease;
}

#kennis .container search::before {
    right: 0;
    background: linear-gradient(90deg, transparent, var(--neutral-100));
}

#kennis .container search::after {
    left: 0;
    background: linear-gradient(90deg, var(--neutral-100), transparent);
}

#kennis .container search:has(fieldset.can-scroll-right)::before {
    opacity: 1;
}

#kennis .container search:has(fieldset.can-scroll-left)::after {
    opacity: 1;
}

#kennis .container search fieldset {
    position: relative;
    display: flex;
    min-width: 100%;
    overflow-x: auto;
    border: 1px solid var(--neutral-300);
}

#kennis .container search fieldset label {
    position: relative;
    padding: .75rem 1rem;
    white-space: nowrap;
    flex-shrink: 0;

    font-family: inter, sans-serif;
    font-size: var(--p-size);
    font-weight: 300;
}

#kennis .container search fieldset label:not(:last-of-type) {
    border-right: 1px solid var(--neutral-300);
}

#kennis .container search fieldset label:has(input[type="checkbox"]:checked) {
    position: relative;
    background: var(--blue);
    color: var(--neutral-100);
    padding-left: 2.5rem;
}

#kennis .container search fieldset label:has(input[type="checkbox"]:checked)::before {
    content: '';
    background-image: url('/images/cross.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;
    position: absolute;
    left: 1rem;
    top: 52.5%;
    translate: 0 -50%;
    width: var(--p-size);
    height: var(--p-size);
}

#kennis .container search fieldset label input[type="checkbox"] {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    appearance: none;
    opacity: 0;
}

#kennis .container search form {
    width: 100%;
    order: -1;
}

#kennis .container search form input[type="search"] {
    width: 100%;
    padding: .5rem 1rem;
    border: 1px solid var(--neutral-300);
    background: transparent;
    font-family: inter, sans-serif;
    font-size: 1rem;
    font-weight: 300;
    color: var(--neutral-900);
}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* ARTICLES.                                           */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - */

/* #kennis .container {
    position: relative;
}

#kennis .container::before {
    content: '';
    z-index: 1;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    background: linear-gradient(transparent, var(--neutral-100));
} */

#kennis .container ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
    gap: 2rem .5rem;
    align-items: stretch;
    height: 50rem;
    overflow-y: auto;
}

#kennis .container ul li {
    display: flex;
    align-self: stretch;
    justify-self: stretch;
}

#kennis .container ul li article {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
}

#kennis .container ul li article .image-container {
    height: 200px;
    background: var(--neutral-500);
}

#kennis .container ul li article .text-container {
    border: 1px solid var(--neutral-300);
    border-top: none;
    border-radius: 0 0 10px 10px;
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: .5rem;
    padding: 1rem;
}

#kennis .container ul li article .text-container h3 {
    font-size: var(--p-size);
    font-weight: 400;
}

#kennis .container ul li article .text-container p {
    font-size: var(--p-size);
    font-weight: 300;
    color: var(--neutral-600);
}

@media (width > 700px) {

    #kennis .container {
        max-width: 1000px;
        margin-inline: auto;
    }

    #kennis .container ul {
        overscroll-behavior: contain;
        border-radius: 10px;
        padding: 1rem;
        border: 1px solid var(--neutral-300);
    }
}
</style>