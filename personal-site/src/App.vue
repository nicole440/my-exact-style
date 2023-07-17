<script setup>


</script>

<template>
    <RouterView />
    <h1>Hi, I'm Nicole.</h1>
    <p>I'm a software developer living in Lancaster County, PA.</p>
  <!-- <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink> |
    <RouterLink to="/projects">Projects</RouterLink>
  </nav> -->
</template>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  line-height: normal;
}
h1 {
  font-weight: 400;
  font-size: 48px;
  margin-bottom: 0;
}
p {
  font-weight: 200;
  font-size: 32px;
  margin: 0 auto;
}

@media (max-width: 1024px) {
  h1 {
    font-size: 28px;
  }
  p {
    font-size: 26px;
  }
}
/* nav {
  text-align: right;
  margin: 3px;
  font-size: 1.25em;
}

@media (max-width: 1024px) {
  nav {
    font-size: 2em;
    width: 100%;
    text-align: center;
  }
} */
</style>