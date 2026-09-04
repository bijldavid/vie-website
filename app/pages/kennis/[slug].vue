<template>
    <div class="banner">
        <img :src="item.banner" :alt="item.heading">
    </div>
    <article id="kennis-detail" v-if="item">
        <div class="container">
            <breadcrumbs>
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/kennis">Kennis</NuxtLink>
                <NuxtLink :to="`/kennis/${item.slug}`">{{ item.heading }}</NuxtLink>
            </breadcrumbs>

            <h1>{{ item.heading }}</h1>

            <!--
                Placeholder body content until per-article body components
                are built (see project plan: components/kennis/bodies/*).
            -->
            <p class="intro">{{ item.intro }}</p>
        </div>
    </article>
</template>

<script setup>
const route = useRoute()
const { getBySlug } = useKennisItems()

const item = getBySlug(route.params.slug)

if (!item) {
    throw createError({ statusCode: 404, statusMessage: 'Artikel niet gevonden' })
}
</script>

<style>
.banner {
    height: 320px;
}

.banner img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

#kennis-detail {
    padding: var(--block-padding) var(--inline-padding);
}

#kennis-detail .container {
    display: grid;
    gap: 1rem;
    width: 100%;
}

#kennis-detail h1 {
    font-size: var(--h2-size);
}

#kennis-detail .back-link {
    font-family: inter, sans-serif;
    font-size: var(--p-size);
    font-weight: 300;
    color: var(--neutral-600);
    text-decoration: none;
    width: fit-content;
}

#kennis-detail .intro {
    font-family: inter, sans-serif;
    font-size: var(--p-size);
    font-weight: 300;
    color: var(--neutral-900);
}

@media (width > 700px) {
    #kennis-detail .container {
        max-width: 1000px;
        margin-inline: auto;
    }
}
</style>