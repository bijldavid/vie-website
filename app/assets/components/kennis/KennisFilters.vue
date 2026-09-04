<template>
    <div class="kennis-filters" aria-label="Artikel filters">
        <fieldset class="no-scrollbar" ref="filterFieldset">
            <legend class="visually-hidden">Filter op categorie</legend>
            <label
                v-for="(filter, index) in filters"
                :key="filter.value"
                :for="`filter-${filter.value}`"
                :style="{
                    order: filterOrder(index, filter.value),
                    viewTransitionName: filterTransitionName(filter.value),
                }"
            >
                <input
                    type="checkbox"
                    :id="`filter-${filter.value}`"
                    name="filter"
                    :value="filter.value"
                    :checked="modelValue.includes(filter.value)"
                    @change="toggleFilter(filter.value)"
                >
                {{ filter.label }}
            </label>
        </fieldset>

        <form role="search" @submit.prevent>
            <label for="artikel-zoeken" class="visually-hidden">Zoek een artikel</label>
            <input
                type="search"
                id="artikel-zoeken"
                name="q"
                placeholder="Zoek een artikel"
                :value="search"
                @input="$emit('update:search', $event.target.value)"
            >
            <button type="submit">
                <img src="" alt="">
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const props = defineProps({
    filters: {
        type: Array,
        required: true, // [{ value, label }]
    },
    modelValue: {
        type: Array,
        required: true, // currently selected filter values
    },
    search: {
        type: String,
        default: '',
    },
})

const emit = defineEmits(['update:modelValue', 'update:search'])

function toggleFilter(value) {
    const isActivating = !props.modelValue.includes(value)
    const next = !isActivating
        ? props.modelValue.filter((v) => v !== value)
        : [...props.modelValue, value]

    runWithViewTransition(() => {
        emit('update:modelValue', next)

        if (isActivating) {
            filterFieldset.value?.scrollTo({ left: 0 })
            updateScrollIndicators()
        }
    })
}

function filterTransitionName(value) {
    return `kennis-filter-${value}`
}

function runWithViewTransition(updateFn) {
    if (typeof document === 'undefined' || !document.startViewTransition) {
        updateFn()
        return
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        updateFn()
        return
    }

    const root = document.documentElement
    const rect = filterFieldset.value?.getBoundingClientRect()
    const previousRootTransitionName = root.style.viewTransitionName
    root.style.viewTransitionName = 'none'
    root.classList.add('is-kennis-filter-transition')

    if (rect) {
        root.style.setProperty('--kennis-vt-top', `${Math.max(rect.top, 0)}px`)
        root.style.setProperty('--kennis-vt-right', `${Math.max(window.innerWidth - rect.right, 0)}px`)
        root.style.setProperty('--kennis-vt-bottom', `${Math.max(window.innerHeight - rect.bottom, 0)}px`)
        root.style.setProperty('--kennis-vt-left', `${Math.max(rect.left, 0)}px`)
    }

    const transition = document.startViewTransition(() => {
        updateFn()
    })

    transition.finished.finally(() => {
        root.classList.remove('is-kennis-filter-transition')
        root.style.removeProperty('--kennis-vt-top')
        root.style.removeProperty('--kennis-vt-right')
        root.style.removeProperty('--kennis-vt-bottom')
        root.style.removeProperty('--kennis-vt-left')
        if (previousRootTransitionName) {
            root.style.viewTransitionName = previousRootTransitionName
        } else {
            root.style.removeProperty('view-transition-name')
        }
    })
}

// Checked items keep their original relative order, just shifted below
// zero so flex `order` always puts the whole checked group first.
function filterOrder(index, value) {
    return props.modelValue.includes(value)
        ? index - props.filters.length
        : index
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Scroll indicators (left/right fade) for the fieldset.
// - - - - - - - - - - - - - - - - - - - - - - - - - - -

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
.kennis-filters {
    position: relative;
    display: grid;
    gap: 1rem;
    width: 100%;
}

.kennis-filters::before,
.kennis-filters::after {
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

.kennis-filters::before {
    right: 0;
    background: linear-gradient(90deg, transparent, var(--neutral-100));
    view-transition-name: kennis-filter-overlay-right;
}

.kennis-filters::after {
    left: 0;
    background: linear-gradient(90deg, var(--neutral-100), transparent);
    view-transition-name: kennis-filter-overlay-left;
}

.kennis-filters:has(fieldset.can-scroll-right)::before {
    opacity: 1;
}

.kennis-filters:has(fieldset.can-scroll-left)::after {
    opacity: 1;
}

.kennis-filters fieldset {
    position: relative;
    display: flex;
    min-width: 100%;
    max-width: max-content;
    overflow-x: auto;
    border: 1px solid var(--neutral-300);
}

.kennis-filters fieldset label {
    position: relative;
    padding: .75rem 1rem;
    white-space: nowrap;
    flex-shrink: 0;

    font-family: inter, sans-serif;
    font-size: var(--p-size);
    font-weight: 300;
}

.kennis-filters fieldset label:not(:last-of-type) {
    border-right: 1px solid var(--neutral-300);
}

.kennis-filters fieldset label:has(input[type="checkbox"]:checked) {
    position: relative;
    background: var(--blue);
    color: var(--neutral-100);
    padding-left: 2.5rem;
}

.kennis-filters fieldset label:has(input[type="checkbox"]:checked)::before {
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

.kennis-filters fieldset label input[type="checkbox"] {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    appearance: none;
    opacity: 0;
    cursor: pointer;

}

.kennis-filters form {
    width: 100%;
    order: -1;
}

.kennis-filters form input[type="search"] {
    width: 100%;
    padding: .5rem 1rem;
    border: 1px solid var(--neutral-300);
    background: transparent;
    font-family: inter, sans-serif;
    font-size: 1rem;
    font-weight: 300;
    color: var(--neutral-900);
}

/* Keep moving labels below the gradient overlays during View Transitions. */
:root.is-kennis-filter-transition::view-transition-group(kennis-filter-netcongestie),
:root.is-kennis-filter-transition::view-transition-group(kennis-filter-energiehubs),
:root.is-kennis-filter-transition::view-transition-group(kennis-filter-subsidies-financiering),
:root.is-kennis-filter-transition::view-transition-group(kennis-filter-lokale-energieoplossingen),
:root.is-kennis-filter-transition::view-transition-group(kennis-filter-samenwerking),
:root.is-kennis-filter-transition::view-transition-group(kennis-filter-data-digitalisering),
:root.is-kennis-filter-transition::view-transition-group(kennis-filter-innovatie) {
    z-index: 3;
}

:root.is-kennis-filter-transition::view-transition-group(kennis-filter-overlay-left),
:root.is-kennis-filter-transition::view-transition-group(kennis-filter-overlay-right) {
    z-index: 4;
}

/* Clip only the temporary transition layer to the fieldset bounds. */
:root.is-kennis-filter-transition::view-transition {
    clip-path: inset(
        var(--kennis-vt-top)
        var(--kennis-vt-right)
        var(--kennis-vt-bottom)
        var(--kennis-vt-left)
    );
}

</style>