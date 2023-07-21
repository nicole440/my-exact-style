<script setup>
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/">home</RouterLink>
      <RouterLink to="/about">about</RouterLink>
      <RouterLink to="/projects">projects</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style>
#app {
  font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: left;
  line-height: normal;
  min-height: 100vh;
  margin: 0;
  display: grid;
}

body {
  display: block;
  background-image: url("https://images.unsplash.com/uploads/141155339325423394b24/03982423?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80");
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin: 0 auto;
}

nav {
  margin: 0 auto;
  position: fixed;
  width: 100%;
  text-align: center;
  background-color: #eceaea;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

nav>a {
  color: #000;
  letter-spacing: 2px;
  padding: 10px;
  margin: 0;
  background-color: #eceaea;
  width: 200px;
}

nav>a:hover {
  background-color: #ffffff;
  color: rgb(192, 112, 7);
}

a {
  text-decoration: none;
  color: rgb(192, 112, 7);
}

a:hover {
  color: #000;
}

@media (max-width: 1024px) {

  body {
    background-attachment: fixed;
    background-position: center bottom;
  }

  h1 {
    font-size: 26px;
  }

  p {
    font-size: 24px;
  }
}

@media (max-width: 800px) {
  nav {
    text-align: center;
    background-color: #eceaea;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  nav>a {
    font-size: 1.5em;
    max-width: 100%;
    letter-spacing: -3px;
    padding: 5px;
    background-color: #eceaea;
  }
}
</style>