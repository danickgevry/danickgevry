<template>
  <header>
    <div class="absolute left-0 right-0 top-0 z-40 pt-14">
      <div class="mx-auto max-w-screen-2xl px-6 lg:px-16 2xl:px-0">
        <MotionFadeTop class="mx-auto max-w-4xl lg:max-w-none">
          <nav class="flex items-center justify-between" aria-label="Global">
            <div class="flex lg:flex-1">
              <span class="sr-only">Danick Gevry</span>
              <img class="h-8 w-auto" src="@/assets/logo.svg" />
            </div>

            <div class="hidden lg:flex lg:gap-x-12">
              <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-medium leading-6 text-white hover:underline hover:underline-offset-8">{{ item.name }}</a>
            </div>
          </nav>
        </MotionFadeTop>
      </div>
    </div>
  </header>
</template>

<script setup>
import MotionFadeTop from '@/components/MotionFadeTop.vue'

const navigation = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/danickgevry/' },
  { name: 'Twitter', href: 'https://twitter.com/corgiking92' },
  { name: 'GitHub', href: 'https://github.com/danickgevry' }
];
</script>