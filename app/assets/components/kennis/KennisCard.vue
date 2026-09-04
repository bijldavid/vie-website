<template>
    <NuxtLink :to="`/kennis/${item.slug}`" class="kennis-card">
        <div class="image-container">
            <img :src="item.thumbnail" :alt="item.heading">
        </div>
        <div class="text-container">
            <h3>{{ item.heading }}</h3>
            <p>{{ item.intro }}</p>
        </div>
    </NuxtLink>
</template>

<script setup>
defineProps({
    item: {
        type: Object,
        required: true,
    },
})
</script>

<style>
/* - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* KENNIS CARD.                                        */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - */

.kennis-card {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
}

.kennis-card .image-container {
    height: 150px;
    background: var(--neutral-500);
}

.kennis-card .image-container img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.kennis-card .text-container {
    border: 1px solid var(--neutral-300);
    border-top: none;
    border-radius: 0 0 10px 10px;
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: .5rem;
    padding: 1rem;
}

.kennis-card .text-container h3 {
    font-size: var(--p-size);
    font-weight: 400;
}

.kennis-card:hover .text-container h3 {
    text-decoration: underline var(--neutral-900) solid .1em !important;
}

.kennis-card .text-container p {
    font-size: var(--p-size);
    font-weight: 300;
    color: var(--neutral-600);
}

@media (width > 700px) {
    .kennis-card {
        border-radius: 10px;
    }
}
</style>