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
    <div class="main-text">
      <div>
        <h1>Hi, I'm Nicole.</h1>
        <p>I'm a software developer in Lancaster County, PA.</p>
        <div class="photo-container">
          <img class="photo" src="src/assets/IMG_5690~5.JPG" alt="Photo of Nicole Groff">
        </div>
        <p class="detail">
          <ul>
            <li>I'm detail-oriented, yet context-driven.</li>
            <li>A pragmatic thinker with a positive attitude.</li>
            <li>I'm self-motived, naturally curious, and always striving to enhance my skills and take on new challenges.</li>
          </ul>
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.photo-container {
  /* background-color: rgba(224, 216, 190, 0.61); */
  margin: 10px auto;
  max-width: fit-content;
  /* border-radius: 10px; */
}
.photo {
  border-radius: 50%;
  height: 175px;
}

li {
  list-style:circle;
}
</style>
