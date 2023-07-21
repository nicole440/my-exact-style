<script>
import HelloWorld from '../components/HelloWorld.vue';
import ProjectsGrid from '../components/ProjectsGrid.vue';

export default {
  components: {
    HelloWorld,
    ProjectsGrid
  },
};
</script>

<template>
  <div>
    <HelloWorld/>
    <ProjectsGrid/>
    <div class="main-text">
      <div>
        <h1>This page is still under construction.</h1>
        <p>Please check back later for updates.</p>
      </div>
    </div>
  </div>
</template>
