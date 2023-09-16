<script setup>
// import { ref } from 'vue';
// // import { useRoute } from 'vue-router';

// let header = "hello, world.";
// const typeValue = ref('');

// const typeEffect = () => {
//   if (typeValue.value.length < header.length) {
//     typeValue.value += header.charAt(typeValue.value.length);
//     setTimeout(typeEffect, 90);
//   }
// }
// typeEffect()

// Change typewriter text depending on the current route
// const route = useRoute();
// if (route.name == 'about') {
//   header = "about me...";
// } else if (route.name == 'resume') {
//   header = "resume";
// } else if (route.name == 'projects') {
//   header = "my projects:";
// } else if (route.name == 'contact') {
//   header = "let's connect!";
// } else {
//   header = "hello, world."
// }
// typeValue.value = ''; // Reset typing effect
// typeEffect(); // Start typing effect again with the new value

</script>

<template>
  <header id="hello">
    <!-- <h1>{{ typeValue }}</h1> -->
    <h1>hello, world.</h1>
  </header>
</template>

<style scoped>
header {
  background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
  font-family: 'Times New Roman', Times, serif;
  color: #000;
  z-index: -1;
  text-align: center;
  white-space: nowrap;
  max-width: 100vw;
}

@media (min-width: 1400px) {
  header {
    min-height: 100vh;
    padding: 150px;
  }
}

header>h1 {
  font-size: 10em;
  padding: 50px;
}

@media (max-width: 820px) {
  header>h1 {
    font-size: 7em;
    text-align: center;
    padding: 150px 0;
  }
}

@media (max-width: 600px) {
  header {
    max-width: 100%;
    margin-top: 50px;
  }

   header>h1 {
    font-size: 4.4em;
    padding: 15px 0;
  }
}
</style>