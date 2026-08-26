<template>
    <AppHeader />
    <slot />
    <AppFooter />
</template>

<script setup>
import AppHeader from '~/assets/components/AppHeader.vue'
import AppFooter from '~/assets/components/AppFooter.vue'
</script>
