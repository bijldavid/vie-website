<template>
    <article class="kennis-card">
        <div class="image-container">
            <img :src="item.thumbnail" :alt="item.heading">
        </div>
        <div class="text-container">
            <h3>{{ item.heading }}</h3>
            <p>{{ item.intro }}</p>
        </div>
    </article>
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

article.kennis-card {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
}

article.kennis-card .image-container {
    height: 150px;
    background: var(--neutral-500);
}

article.kennis-card .image-container img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

article.kennis-card .text-container {
    border: 1px solid var(--neutral-300);
    border-top: none;
    border-radius: 0 0 10px 10px;
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: .5rem;
    padding: 1rem;
}

article.kennis-card .text-container h3 {
    font-size: var(--p-size);
    font-weight: 400;
}

article.kennis-card .text-container p {
    font-size: var(--p-size);
    font-weight: 300;
    color: var(--neutral-600);
}

@media (width > 700px) {
    article.kennis-card {
        border-radius: 10px;
    }
}
</style>