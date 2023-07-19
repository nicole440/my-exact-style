<script setup>
import { ref } from 'vue';
const code = "hello, world."
const typeValue = ref('')

const typeEffect = () => {
  if (typeValue.value.length < code.length) {
    typeValue.value += code.charAt(typeValue.value.length);
    setTimeout(typeEffect, 75);
  } 
}
typeEffect()

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
  margin: 0 auto;
  padding: 10px 0 0 0;
  align-items: left;
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
    font-size: 7em;
  }
}

@media (max-width: 600px) {
  .typingEffect {
    font-size: 4em;
  }
}
</style>