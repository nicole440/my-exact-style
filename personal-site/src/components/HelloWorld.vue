<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

let code = "";
const typeValue = ref('');

const typeEffect = () => {
  if (typeValue.value.length < code.length) {
    typeValue.value += code.charAt(typeValue.value.length);
    setTimeout(typeEffect, 75);
  } 
}
typeEffect()

const route = useRoute();
if (route.name == 'about') {
  code = "about me...";
} else if (route.name == 'resume') {
  code = "resume";
} else if (route.name == 'projects') {
  code = "my projects:";
} else {
  code = "hello, world."
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
  margin: 0 10px;
  padding: 20px 0 0 0;
  align-items: left;
  width: max-content;
  border-right: 2px solid #000;
  white-space: nowrap;
  animation: blink 1s linear infinite;
}
.typingEffect>p {
  font-size: 10em;
}

@keyframes blink {
  0%, 45% {
    border-color: transparent;
  }
  50%, 100% {
    border-color: #000;
  }
}

@media (max-width: 800px) {
  .typingEffect>p{
    font-size: 7em;
    margin-top: 25px;
  }
}

@media (max-width: 600px) {
  .typingEffect>p{
    font-size: 4.5em;
    margin-top: 25px;
  }
}
</style>