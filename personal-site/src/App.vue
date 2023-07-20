<script setup>

</script>

<template>
  <nav>
    <RouterLink to="/">home</RouterLink>
    <RouterLink to="/about">about</RouterLink>
    <RouterLink to="/projects">projects</RouterLink>
  </nav>
  <RouterView />
</template>

<style>
#app {
  font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: left;
  line-height: normal;
  min-height: 100vh;
  margin: 0;
}

body {
  display: block;
  background-image: url("https://images.unsplash.com/uploads/141155339325423394b24/03982423?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80");
  background-size: auto;
  background-attachment: fixed;
  margin: 0 auto;
}

nav {
  margin: 0 auto;
  position: fixed;
  width: 100%;
  text-align: right;
  background-color: #eceaea;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

nav > a {
  letter-spacing: 2px;
  padding: 5px 20px;
  background-color: #eceaea;
}

nav > a:hover {
  background-color: #f3f2f2;
}



a {
  text-decoration: none;
  color: rgb(255, 145, 0);
}

a:hover {
  color: rgb(255, 0, 157);
}

@media (max-width: 1024px) {

  body {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
  }

  h1 {
    font-size: 26px;
  }

  p {
    font-size: 24px;
  }
}

</style>