<template>
    <section id="kennis-overview">
        <div class="container">
            <p class="sub-title">Kennisplatform</p>
            <h1>Alle artikelen</h1>

            <KennisFilters
                :filters="filters"
                v-model="selectedFilters"
                v-model:search="searchQuery"
            />

            <span class="hr"></span>

            <p v-if="filteredItems.length === 0" class="empty-state">
                Geen artikelen gevonden. Probeer een andere zoekterm of filter.
            </p>

            <TransitionGroup v-else name="kennis-card" tag="ul">
                <li v-for="item in filteredItems" :key="item.slug">
                    <KennisCard :item="item" />
                </li>
            </TransitionGroup>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const { items, filters } = useKennisItems()

const selectedFilters = ref([])
const searchQuery = ref('')

const filteredItems = computed(() => {
    const query = searchQuery.value.trim().toLowerCase()

    return items.filter((item) => {
        const matchesFilters =
            selectedFilters.value.length === 0 ||
            item.tags.some((tag) => selectedFilters.value.includes(tag))

        const matchesSearch =
            query === '' ||
            item.heading.toLowerCase().includes(query) ||
            item.intro.toLowerCase().includes(query)

        return matchesFilters && matchesSearch
    })
})
</script>

<style>
#kennis-overview {
    padding: var(--block-padding) var(--inline-padding);
}

#kennis-overview .container {
    display: grid;
    gap: 1rem;
}

#kennis-overview .empty-state {
    font-family: inter, sans-serif;
    font-size: var(--p-size);
    font-weight: 300;
    color: var(--neutral-600);
    padding: 2rem 0;
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* ARTICLES.                                           */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - */

#kennis-overview .container ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
    gap: 2rem .5rem;
    align-items: stretch;
}

#kennis-overview .container ul li {
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

@media (width > 700px) {
    #kennis-overview .container {
        max-width: 1300px;
        margin-inline: auto;
    }

    #kennis-overview .container ul {
        border-radius: 10px;
    }
}
</style>