<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

let header = "";
const typeValue = ref('');

const typeEffect = () => {
  if (typeValue.value.length < header.length) {
    typeValue.value += header.charAt(typeValue.value.length);
    setTimeout(typeEffect, 100);
  } 
}
typeEffect()

// Change typewriter text depending on the current route
const route = useRoute();
if (route.name == 'about') {
  header = "about me...";
} else if (route.name == 'resume') {
  header = "resume";
} else if (route.name == 'projects') {
  header = "my projects:";
} else if (route.name == 'contact') {
  header = "let's connect!";
} else {
  header = "hello, world."
}
typeValue.value = ''; // Reset typing effect
  typeEffect(); // Start typing effect again with the new value

</script>

<template>
    <div id="typing-effect">
      <p>{{ typeValue }}</p>
    </div>
</template>

<style scoped>

#typing-effect {
  background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
  font-family: 'Times New Roman', Times, serif;
  color: #000;
  display: block;
  padding: 120px 0;
  text-align: center;
  margin-bottom: 10px;
  white-space: nowrap;
}
@media (min-width: 1400px) {
  #typing-effect {
    min-height: 100vh;
  }
}

#typing-effect>p {
  font-size: 10em;
}
@media (max-width: 800px) {
  #typing-effect>p{
    font-size: 7em;
    text-align: center;
  }
}

@media (max-width: 600px) {
  #typing-effect{
    max-width: 100%;
    padding: 15px 0;
    margin-top: 40px;
  }
  #typing-effect>p{
    font-size: 4.4em;
  }
}
</style>