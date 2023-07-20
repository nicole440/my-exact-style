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
    <HelloWorld />
    <IntroText/>
    <div class="main-text">
      <div>
        <h1>Hi, I'm Nicole.</h1>
        <p>I'm a software developer in Lancaster County, PA.</p>
      </div>
      <div>
        <p class="detail">I have a passion for harnessing the power of data using Java and Python. Whether it's building
          algorithms or developing efficient data processing systems, I find joy in crafting elegant solutions that
          drive
          insightful outcomes.</p>
      </div>
      <div>
        <p class="detail">I also love working with databases, from designing solid database architectures to writing
          efficient queries and ensuring seamless integration with applications. I enjoy diving deep into the
          intricacies of
          data storage, retrieval, and optimization.</p>
      </div>
      <div>
        <p class="detail">When I'm not programming, I enjoy birdwatching, Brazilian jiu jitsu, and spoiling my rescue
          animals with love.
        </p>
      </div>
    </div>
  </div>
</template>

<style></style>
