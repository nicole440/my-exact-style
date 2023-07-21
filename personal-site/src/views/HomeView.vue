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
    <HelloWorld />
    <TextContent/>
    <div class="main-text">
      <div>
        <h1>Hi, I'm Nicole.</h1>
        <p>I'm a software developer in Lancaster County, PA.</p>
      </div>
      
    </div>
  </div>
</template>

<style></style>
