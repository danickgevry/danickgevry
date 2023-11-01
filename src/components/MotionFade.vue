<template>
  <div ref="motion" v-bind="$attrs" class="opacity-0">
    <slot />
  </div>
</template>

<script setup>
import { ref, useAttrs, onMounted, onUpdated } from 'vue'
import { useMotion } from '@vueuse/motion'

const attrs = useAttrs();
const motion = ref(null);
const initial = {
  opacity: 0,
};
const visibleOnce = {
  opacity: 1,
  transition: {
    duration: 600,
    type: 'keyframes',
    ease: 'easeInOut',
    delay: attrs.delay || null
  }
};

onMounted(() => {
  useMotion(motion.value, { initial, visibleOnce });
});

onUpdated(() => {
  useMotion(motion.value, { initial, visibleOnce });
});
</script>