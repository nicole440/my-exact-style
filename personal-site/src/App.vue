<script setup>


</script>

<template>
  <RouterView />
  <div class="intro-text">
    <div class="first">
      <h1>Hi, I'm Nicole.</h1>
      <p>I'm a software developer in Lancaster County, PA.</p>
    </div>
    <div>
      <p class="detail">I have a passion for harnessing the power of data using Java and Python. Whether it's building algorithms or developing efficient data processing systems, I find joy in crafting elegant solutions that drive insightful outcomes.</p>
    </div>
    <div>
      <p class="detail">I also love working with databases, from designing solid database architectures to writing efficient queries and ensuring seamless integration with applications. I enjoy diving deep into the intricacies of data storage, retrieval, and optimization.</p>
    </div>
    <div>
      <p class="detail">When I'm not programming, I enjoy birdwatching, Brazilian jiu jitsu, and spoiling my dog and three cats.
      </p>
    </div>
    <div class="last">
      <p class="subtext">Check out my <a href="https://www.github.com/nicole440" target="_blank">GitHub</a> to see my
        projects while I continue building out this page!</p>
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
  background-image: url("https://images.unsplash.com/uploads/141155339325423394b24/03982423?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80");
  background-size: auto;
  background-attachment: fixed;

}

.intro-text>div {
  margin-bottom: 25px;
  max-width: 40%;
  background-color: #ffffff94;
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

.detail {
  font-size: 22px;
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
  .intro-text>div {
    max-width: 500px;
    margin: 40px 12px;
    background-color: #ffffffd0;
  }

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

@media (max-width: 600px) {
  .intro-text>div {
    text-align: center;
    margin-bottom: 50px;
  }
}
</style>