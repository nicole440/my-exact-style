<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <header>
        <nav>
            <RouterLink to="/">Home</RouterLink> |
            <RouterLink to="/about">About</RouterLink> |
            <RouterLink to="/projects">Projects</RouterLink>
        </nav>
    </header>

    <RouterView />
</template>

<style scoped>
header {
  text-align: right;
  margin: 3px;
}

@media (max-width: 1024px) {
  header {
    font-size: 2em;
    width: 100%;
    text-align: center;
  }
}
</style>

