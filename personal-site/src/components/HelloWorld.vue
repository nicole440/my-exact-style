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
} else if (route.name == 'home') {
  code = "hello, world.";
} else if (route.name == 'projects') {
  code = "my projects:";
} else {
  code = "helloooooooo"
}
typeValue.value = ''; // Reset typing effect
  typeEffect(); // Start typing effect again with the new value

</script>

<template>
    <div>
      <p class="typingEffect">
        {{ typeValue }}
      </p>
    </div>
</template>

<style scoped>

.typingEffect {
  background-color: transparent;
  font-family: 'Times New Roman', Times, serif;
  color: #000;
  display: flex;
  margin: 0 10px;
  padding: 20px 0 0 0;
  align-items: left;
  width: max-content;
  font-size: 10em;
  border-right: 2px solid #000;
  white-space: nowrap;
  animation: blink 1s linear infinite;
}

@keyframes blink {
  0%, 45% {
    border-color: transparent;
  }
  50%, 100% {
    border-color: #000;
  }
}

@media (max-width: 1024px) {
  .typingEffect {
    padding-top: 35px;
    font-size: 7em;
  }
}

@media (max-width: 600px) {
  .typingEffect {
    font-size: 4em;
  }
}
</style>