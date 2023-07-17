<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

    <header>
      <h2>Nicole L. Groff</h2>
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/about">About</RouterLink> |
        <RouterLink to="/projects">Projects</RouterLink>
      </nav>
    </header>

    <RouterView />

</template>

<style scoped>

@media (min-width: 1024px) {}
</style>

