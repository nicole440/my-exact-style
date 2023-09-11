<script setup>
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
    </nav>
    <RouterView />
    <footer>
      <div class="contact-logos">
        <a href="https://linkedin.com/in/ngroff" target="_blank"><img class="linkedin-logo" src="/linkedin.png"
            alt="LinkedIn logo"></a>
        <a href="https://github.com/nicole440" target="_blank"><img class="github-logo"
            src="/GitHub-PNG-Isolated-Photo.png" alt="GitHub logo"></a>
      </div>
      <h6>© 2023 Nicole L. Groff. All Rights Reserved.</h6>
    </footer>
  </div>
</template>

<style>
#app {
  box-sizing: border-box;
  font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: left;
  line-height: normal;
  min-height: 100vh;
  margin: 0;
  display: grid;
  background-color: #9996c9;
}

body {
  display: block;
  background-image: url("https://images.unsplash.com/uploads/141155339325423394b24/03982423?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80");
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin: 0 auto;
  padding-bottom: 50px;
}

nav,
footer {
  margin: 0 auto;
  position: fixed;
  width: 100%;
  text-align: center;
  background-color: #fff;
}

nav {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.123);
}

nav>a {
  color: #000;
  letter-spacing: 2px;
  padding: 10px;
  margin: 0;
  width: 150px;
}

nav>a:hover {
  background-color: #eceaea;
  color: rgb(192, 112, 7);
}

a {
  text-decoration: none;
  color: rgb(192, 112, 7);
}

a:hover {
  color: #000;
}

.contact-logos {
  display: inline-block;
}

.linkedin-logo {
  max-height: 30px;
  margin: 0 auto;
}

.github-logo {
  max-width: 43px;
  max-height: 25px;
  margin: 3px auto;
}

@media (max-width: 1024px) {

  body {
    background-attachment: fixed;
    background-position: center bottom;
  }
}

@media (max-width: 800px) {
  nav {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;

  }

  nav>a {
    width: auto;
    font-size: 1.5em;
    letter-spacing: -3px;
  }
}

footer {
  letter-spacing: 2px;
  bottom: 0;
  text-align: center;
  box-shadow: 0 5px 2px 7px rgba(0, 0, 0, 0.123);
}

footer>h6 {
  margin-bottom: 8px;
  margin-top: 0;
}
</style>