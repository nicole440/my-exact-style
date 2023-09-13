<template>
  <div>
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#resume">Resume</a>
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

html {
  scroll-behavior:smooth;
}

#app {
  box-sizing: border-box;
  font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: left;
  line-height: normal;
  min-height: 100vh;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "intro"
    "about"
    "projects"
    "resume"
}


#intro {
    grid-area: intro;
}

#about {
    grid-area: about;
}

#projects {
  grid-area: projects;
}

#resume {
    grid-area: resume;
}

body {
  display: block;
  background-size: cover;
  background-position: bottom;
  background-image: url("https://images.unsplash.com/photo-1693920182708-63c55d252260?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80");
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin: 0 auto;
  padding-bottom: 50px;
}

/* NAV BAR & FOOTER */

nav,
footer {
  margin: 0 auto;
  position: fixed;
  width: 100vw;
  text-align: center;
}

nav {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.123);
  background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, .5), rgba(255, 255, 255, .3));
}

nav>a {
  color: #000;
  letter-spacing: 2px;
  padding: 10px;
  margin: 0;
  width: 150px;
}

nav>a:hover {
  background-color: #eceaeaa2;
  background: linear-gradient(rgba(200, 200, 200, 0.5), rgba(200, 200, 200, 0.4), rgba(200, 200, 200, 0.3), rgba(200, 200, 200, .2));
  color: rgb(192, 112, 7);
}

@media (max-width: 992px) {
  nav, footer {
    background-color: rgba(255, 255, 255, 0.65);
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  nav>a {
    width: auto;
    font-size: 1.5em;
    letter-spacing: -3px;
  }
}

a {
  text-decoration: none;
  color: rgb(192, 112, 7);
}

a:hover {
  color: #000;
}

/* FOOTER */

footer {
  letter-spacing: 2px;
  bottom: 0;
  text-align: center;
  background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, .9));
}

footer>h6 {
  margin-bottom: 8px;
  margin-top: 0;
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

</style>