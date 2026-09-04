<template>
    <header :class="{ 'is-scrolled': isScrolled }">
        <div class="container">
            <NuxtLink to="/" class="logo-container">
                <img src="/images/vie-logo.webp" alt="VIE Logo">
            </NuxtLink>

            <nav :class="{ 'toggle-menu': menuOpen, 'menu-interacted': menuInteracted }" @click="handleNavClick">
                <ul>
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/kennis">Kennis</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/over">Over ons</NuxtLink>
                    </li>
                </ul>
            </nav>

            <button class="hamburger" @click="toggleMenu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

/* ================================================== */
/* STATE                                              */
/* ================================================== */

const menuOpen = ref(false)
const menuInteracted = ref(false)
const isScrolled = ref(false)

/* ================================================== */
/* HELPERS                                            */
/* ================================================== */

function setScrollLock(isLocked) {
    if (typeof document === 'undefined') return
    document.documentElement.classList.toggle('menu-open', isLocked)
    document.body.classList.toggle('menu-open', isLocked)
}

/* ================================================== */
/* INTERACTIONS                                       */
/* ================================================== */

function toggleMenu() {
    menuInteracted.value = true
    menuOpen.value = !menuOpen.value
}

function handleKeydown(event) {
    if (event.key === 'Escape') {
        menuOpen.value = false
    }
}

function handleResize() {
    menuOpen.value = false
    menuInteracted.value = false
    setScrollLock(false)
}

function handleNavClick(event) {
    if (!event.target.closest('a')) return
    menuOpen.value = false
    setScrollLock(false)
}

const updateScrollState = () => {
    if (typeof window === 'undefined') return
    isScrolled.value = window.scrollY > 0
}

/* ================================================== */
/* LIFECYCLE                                          */
/* ================================================== */

let stopWatcher

onMounted(() => {
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('keydown', handleKeydown)
    window.addEventListener('resize', handleResize)

    stopWatcher = watch(menuOpen, (isOpen) => {
        setScrollLock(isOpen)
    }, { immediate: true })
})

onUnmounted(() => {
    menuOpen.value = false
    setScrollLock(false)
    window.removeEventListener('scroll', updateScrollState)
    window.removeEventListener('keydown', handleKeydown)
    window.removeEventListener('resize', handleResize)
    if (typeof stopWatcher === 'function') stopWatcher()
})
</script>

<style>
/* ================================================== */
/* HEADER                                             */
/* ================================================== */

header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    backdrop-filter: blur(0);
    background-color: transparent;
    transition: background-color .3s ease, backdrop-filter .3s ease;
    padding: 1.5rem var(--inline-padding);
}

header.is-scrolled {
    backdrop-filter: blur(10px);
    background: color-mix(in srgb, var(--neutral-100) 80%, transparent 20%);
}

header .container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    isolation: isolate;
}

header .container .logo-container {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    transition: height .3s ease;
}

header .container .logo-container::after {
    content: '';
    position: absolute;
    z-index: 11;
    top: 50%;
    left: 50%;
    translate: -50% -47%;
    height: 100%;
    width: 100%;
    background-image: url(/images/vie-logo-white.webp);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0;
    transition: opacity .3s ease;
}

header:has(.toggle-menu) .container .logo-container::after {
    opacity: 1;
}

header.is-scrolled .container .logo-container {
    height: 1.5rem;
}

header .container .logo-container img {
    height: 100%;
    width: auto;
    transition: height .3s ease;
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - */
/* NAV                                                */
/* - - - - - - - - - - - - - - - - - - - - - - - - - */

header .container nav {
    position: fixed;
    background: var(--blue);
    inset: 0;
    height: 100vh;
    width: 100%;
    translate: 100%;
}

header .container nav.menu-interacted {
    transition: translate .3s ease;
}

header .container nav ul {
    display: grid;
    justify-content: center;
    gap: 1rem;
    margin: 10rem var(--inline-padding);
    border-top: 1px solid var(--devider-bright);
}

header .container nav ul li {
    height: 100%;
    width: max-content;
    justify-self: center;
}

header .container nav ul li a {
    display: block;
    font-family: inter, sans-serif;
    font-weight: 400;
    line-height: 1.5em;
    color: var(--neutral-100);
    font-size: var(--p-size);
    text-decoration: underline color-mix(in srgb, var(--neutral-100) 20%, transparent 80%) solid .125em !important;
    text-underline-offset: .5em;
    width: max-content;
    line-height: 1.75em;
    transition: background-color 0.15s ease, text-decoration 0.15s ease;
}

header .container nav.toggle-menu {
    translate: 0 0;
}

@media (hover: hover) and (width < 700px) and (pointer: fine) {
    header .container nav ul li:hover a {
        text-decoration: underline color-mix(in srgb, var(--neutral-100) 60%, transparent 40%) solid .125em !important;
        transition: background-color 0.15s ease, text-decoration 0.15s ease;
        background: color-mix(in srgb, var(--neutral-100) 10%, transparent 90%);
    }
}

header .container:has(.toggle-menu) button span {
    background-color: var(--neutral-100) !important;
}

body.menu-open {
    overflow: hidden;
}


/* - - - - - - - - - - - - - - - - - - - - - - - - - */
/* HAMBURGER MENU                                    */
/* - - - - - - - - - - - - - - - - - - - - - - - - - */

header .container button {
    --burger-size: 15px;
    position: absolute;
    top: 50%;
    right: 0;
    translate: 0 -50%;

    height: var(--burger-size);
    width: 20px;
    display: grid;
    grid-template-areas: 'stack';
    place-items: center;
    z-index: 10;
}

@media (hover: hover) and (pointer: fine) {
    header .container button::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        height: 2.5rem;
        aspect-ratio: 1;

        background: var(--blue-accent);
        opacity: 0.1;
        border-radius: 50%;
        z-index: -1;
        scale: 0;
        transition: scale .3s ease, opacity .3s ease;
    }

    header .container button:hover::after {
        scale: 1;
        opacity: 0.15;
    }
}

header .container button span {
    --line-thickness: 2px;
    grid-area: stack;
    width: 100%;
    height: var(--line-thickness);
    background-color: var(--blue);
    transition: background-color .3s ease, translate .3s ease, rotate .3s ease, opacity .3s ease, width .3s ease;
}

header .container button span:first-of-type {
    translate: 0 calc(-1 * (var(--burger-size) / 2) + (var(--line-thickness) / 2));
}

header .container button span:last-of-type {
    translate: 0 calc((var(--burger-size) / 2) - (var(--line-thickness) / 2));
}

header .container:has(.toggle-menu) button span:nth-of-type(1) {
    translate: 0 0;
    rotate: z 45deg;
    width: calc(100% * 1.1);
}

header .container:has(.toggle-menu) button span:nth-of-type(2) {
    translate: 0 0;
    opacity: 0;
    width: 0px;
}

header .container:has(.toggle-menu) button span:nth-of-type(3) {
    translate: 0 0;
    rotate: z -45deg;
    width: calc(100% * 1.1);
}

@media (width > 700px) {
    header .container {
        max-width: 1300px;
        margin: 0 auto;
        justify-content: center;
    }

    header .container>button {
        display: none;
    }

    header .container nav {
        position: absolute;
        top: 50%;
        left: 0;
        translate: 0 -50%;
        height: 100%;
        width: 100%;
        background: none;
        display: flex;
        justify-content: left;
        align-items: center;
    }

    header .container nav ul {
        display: flex;
        margin: 0;
        gap: 2rem;
        border: none;
    }

    header .container nav ul li {
        padding: 0;
    }

    header .container nav ul li a {
        font-family: inter, sans-serif;
        font-weight: 400;
        line-height: 1.5em;
        color: var(--blue);
        font-size: var(--sub-title-size);
        padding: 0;
        border-radius: 0;

        color: var(--blue);
        text-decoration: underline var(--blue-accent) solid .125em !important;
        text-underline-offset: .5em;
        width: max-content;
        line-height: 1.75em;
        transition: background-color 0.15s ease, text-decoration 0.15s ease;
    }

    header .container nav ul li a:hover {
        text-decoration: underline var(--blue) solid .125em !important;
        background: color-mix(in srgb, var(--blue-accent) 30%, transparent 70%);
    }
}
</style>