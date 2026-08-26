<template>
    <section id="kennis">
        <div class="container">
            <p class="sub-title">Kennisplatform</p>
            <h2>Kennis voor een energiesysteem in beweging</h2>
            <KennisFilters
                :filters="filters"
                v-model="selectedFilters"
                v-model:search="searchQuery"
            />
            <span class="hr"></span>
            <TransitionGroup name="kennis-card" tag="ul">
                <li v-for="item in visibleItems" :key="item.slug">
                    <KennisCard :item="item" />
                </li>
            </TransitionGroup>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const MAX_VISIBLE = 9

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

const visibleItems = computed(() => filteredItems.value.slice(0, MAX_VISIBLE))
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

#kennis .container .kennis-filters {
    width: 100%;
}


/* - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* ARTICLES.                                           */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - */

#kennis .container ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
    gap: 2rem .5rem;
    align-items: stretch;
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