<script>
import HelloWorld from '../components/HelloWorld.vue';
import Intro from '../components/Intro.vue';
import About from '../components/About.vue';
import ProjectsGrid from '../components/ProjectsGrid.vue';
import Resume from '../components/Resume.vue';

export default {
  components: {
    HelloWorld,
    Intro,
    About,
    ProjectsGrid,
    Resume
  },
};
</script>

<template>
  <div>
    <HelloWorld />
    <Intro />
    <About />
    <ProjectsGrid />
    <Resume />
  </div>
</template>

<style>
h1,
h2,
h3 {
  font-weight: 400;
  margin: 0 auto;
  padding: 5px 0;
}

h1 {
  font-size: 42px;

}

h2 {
  font-size: 28px;
}

h3 {
  font-size: 1rem;
  margin: 0;
}

h4 {
  color: rgb(192, 112, 7);
  font-family: 'La Belle Aurore', 'Lucida Handwriting', 'Brush Script MT', cursive;
  font-weight: normal;
  font-size: 6rem;
  text-align: center;
  margin: 0;
  padding-bottom: 20px;
  line-height: 0;
}

p {
  font-weight: 200;
  font-size: 24px;
  margin: 0;
  padding: 5px 0;
}

@media (max-width: 1024px) {
  h1 {
    font-size: 26px;
  }

  p {
    font-size: 24px;
  }
}

p.detail {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

section {
  margin: 0 auto;
  margin-bottom: 150px;
  border-radius: 20px;
  padding: 15px 30px;
  background-color: #ffffffde;
  max-width: 80vw;
}

@media (max-width: 800px) {
  section {
    max-width: 100vw;
  }
}
</style>
