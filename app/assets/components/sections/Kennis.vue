<template>
    <section id="kennis">
        <div class="container">
            <p class="sub-title">Kennisplatform</p>
            <h2>Kennis voor een energiesysteem in beweging</h2>
            <TransitionGroup name="kennis-card" tag="ul">
                <li v-for="item in visibleItems" :key="item.slug">
                    <KennisCard :item="item" />
                </li>
            </TransitionGroup>
            <NuxtLink to="/kennis" class="button">Alle artikelen →</NuxtLink>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'

const MAX_VISIBLE = 9

const { items } = useKennisItems()

const visibleItems = computed(() => items.slice(0, MAX_VISIBLE))
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


/* - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* ARTICLES                                            */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - */

#kennis .container ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
    gap: 2rem .5rem;
    align-items: stretch;
    margin-block: 1rem;
}

#kennis .container ul li {
    display: flex;
    align-self: stretch;
    justify-self: stretch;
}

.kennis-card-enter-active {
    transition: opacity .32s ease, transform .32s ease;
}

.kennis-card-enter-from {
    opacity: 0;
    transform: translateY(10px) scale(.98);
}

.kennis-card-enter-to {
    opacity: 1;
    transform: translateY(0) scale(1);
}

#kennis .container a {
    justify-self: center;
}

@media (width > 700px) {

    #kennis .container {
        max-width: 1000px;
        margin-inline: auto;
    }

    #kennis .container ul {
        border-radius: 10px;
    }
}
</style>