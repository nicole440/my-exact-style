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
    <TextContent />
    
  </div>
</template>

<style scoped>
p, h1 {
  margin-bottom: 30px;
}

p {
  font-size: 1.5rem;
}
</style>