<script setup>


</script>

<template>
  <RouterView />
  <div class="intro-text">
    <div class="first">
      <h1>Hi, I'm Nicole.</h1>
      <p>I'm a software developer living in Lancaster County, PA.</p>
      <p class="subtext">(That's not me, that's just a bird).</p>
    </div>
    <div class="second">
      <p>I enjoy birdwatching, craft beer, and Brazilian jiu jitsu.</p>
    </div>
    <div class="third">
      <p class="subtext">Check out my <a href="https://www.github.com/nicole440" target="_blank">GitHub</a> to see my projects while I continue building out this page!</p>
    </div>

  </div>
  <!-- <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink> |
    <RouterLink to="/projects">Projects</RouterLink>
  </nav> -->
</template>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  text-align: left;
  line-height: normal;
  min-height: 100vh;
  margin: 0;
}

body {
  background-image: url(https://images.unsplash.com/uploads/141155339325423394b24/03982423?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80);
  background-size: auto;
}

.intro-text > div {
  margin-bottom: 30px;
  max-width: 50%;
}
h1 {
  font-weight: 400;
  font-size: 42px;
  margin-bottom: 0;
}

p {
  font-weight: 200;
  font-size: 28px;
  margin: 0 auto;
}

.subtext {
  font-size: 24px;
}

a {
  text-decoration: none;
  color: rgb(255, 145, 0);
}

a:hover {
  color: rgb(255, 0, 157);
}

@media (max-width: 1024px) {
  .intro-text > div {
    max-width: 500px;
  }
  h1 {
    font-size: 26px;
  }

  p {
    font-size: 24px;
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
} */</style>