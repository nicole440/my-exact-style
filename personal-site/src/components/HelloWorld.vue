<script setup>
import { ref } from 'vue';
const code = "hello, world."
const typeValue = ref('')

const typeEffect = () => {
  if (typeValue.value.length < code.length) {
    typeValue.value += code.charAt(typeValue.value.length);
    setTimeout(typeEffect, 50);
  } 
}
typeEffect()

</script>

<template>
  <code>
    <div>
      <p class="typingEffect">
        {{ typeValue }}
      </p>
    </div>
  </code>
</template>

<style scoped>
code {
  color: #000;
  display: flex;
  margin: 0 auto;
  align-items: left;
}

.typingEffect {
  font-size: 7rem;
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
</style>