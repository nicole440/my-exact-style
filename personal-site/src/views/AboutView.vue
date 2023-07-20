<script>
import HelloWorld from '../components/HelloWorld.vue';
import IntroText from '../components/IntroText.vue';

export default {
  components: {
    HelloWorld,
    IntroText
  },
};
</script>

<template>
  <div>
    <HelloWorld/>
    <IntroText/>
    <div class="main-text">
      <div>
        <h1>This page is under construction.</h1>
        <p>Please check back later for updates.</p>
      </div>
    </div>
  </div>
</template>