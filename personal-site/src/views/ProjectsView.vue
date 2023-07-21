<script>
import HelloWorld from '../components/HelloWorld.vue';
import TextContent from '../components/TextContent.vue';

export default {
  components: {
    HelloWorld,
    TextContent
  },
};
</script>

<template>
  <div>
    <HelloWorld/>
    <TextContent/>
    <div class="main-text">
      <div>
        <h1>This page is under construction.</h1>
        <p>Please check back later for updates.</p>
      </div>
      <div>
        <p class="subtext">For now, take a look at my <a href="https://www.github.com/nicole440"
            target="_blank">GitHub</a>
          to
          see what else I've been working on.</p>
      </div>
    </div>
  </div>
</template>
