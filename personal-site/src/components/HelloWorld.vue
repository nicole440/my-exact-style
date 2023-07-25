<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

let header = "";
const typeValue = ref('');

const typeEffect = () => {
  if (typeValue.value.length < header.length) {
    typeValue.value += header.charAt(typeValue.value.length);
    setTimeout(typeEffect, 75);
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
    <div class="typingEffect">
      <p>{{ typeValue }}</p>
    </div>
</template>

<style scoped>

.typingEffect {
  background-color: transparent;
  font-family: 'Times New Roman', Times, serif;
  color: #000;
  display: block;
  padding: 20px 0 0 0;
  align-items: left;
  margin-left: 10px;
  white-space: nowrap;
}
.typingEffect>p {
  font-size: 10em;
}

@media (max-width: 800px) {
  .typingEffect>p{
    font-size: 7em;
    margin-top: 20px;
  }
}

@media (max-width: 600px) {
  .typingEffect>p{
    font-size: 4.6em;
  }
}
</style>