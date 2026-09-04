<template>
    <nav class="breadcrumbs">
        <slot />
    </nav>
</template>

<script>

</script>

<style>
.breadcrumbs {
    --gap: 2.5rem;
    display: flex;
    align-items: center;
    gap: var(--gap);
    width: max-content;
}

.breadcrumbs a {
    position: relative;
    font-weight: 300;
    line-height: 1.75em;
    font-family: inter, sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-size: var(--sub-title-size);
    color: var(--neutral-600);

    text-decoration: underline transparent solid .125em !important;
    text-underline-offset: .5em;
    width: max-content;
    line-height: 1.75em;
    transition: background-color 0.15s ease, text-decoration 0.15s ease, color 0.15s ease;
}

.breadcrumbs a:hover {
    color: var(--blue);
    background: var(--background-100);
    text-decoration: underline var(--blue) solid .125em !important;
    background: color-mix(in srgb, var(--blue-accent) 30%, transparent 70%);
}

.breadcrumbs a:not(:last-of-type)::before {
    content: '';
    position: absolute;
    height: var(--sub-title-size);
    aspect-ratio: 1;
    top: 50%;
    right: calc(var(--gap) / 2 * -1);
    translate: 50% -50%;
    pointer-events: none;

    background-image: url(/images/breadcrum-arrow.png);
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
}
</style>