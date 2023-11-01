<template>
  <SiteHeader />

  <main class="w-full flex-auto overflow-hidden">
    <section class="relative flex flex-col md:flex-row items-center isolate h-screen">
      <!-- Main content -->
      <div class="mx-auto w-full max-w-screen-2xl px-6 mt-40 md:mt-0 lg:px-16 2xl:px-0 z-20">
        <MotionFadeRight class="lg:max-w-4xl">
          <RouterView />
        </MotionFadeRight>
      </div>

      <!-- Background -->
      <div class="absolute top-0 right-0 bottom-0 left-0 overflow-hidden flex items-center justify-end bg-black z-10">
        <MotionFade class="flex justify-end w-full h-full">
          <svg viewBox="0 0 2000 2000" fill="none" class="h-full opacity-40">
            <g clip-path="url(#:S1:-clip)" class="group">
              <foreignObject width="2000" height="2000">
                <img alt="" loading="lazy" decoding="async" data-nimg="1" class="w-full bg-black object-cover" style="color:transparent;aspect-ratio:1 / 1" src="@/assets/images/danick-gevry.jpg">
              </foreignObject>
              <use href="#:S1:-shape"></use>
            </g>
            <defs>
              <clipPath id=":S1:-clip" filter="url(#inset-shadow)">
                <path id=":S1:-shape" d="M2255.6,129.609c171.684,150.661 199.714,466 199.714,746.3c-0,276.797 -28.03,522.06 -108.617,798.857c-84.09,276.797 -220.737,585.128 -466,728.782c-245.263,143.654 -595.638,122.631 -833.894,-35.038c-238.255,-161.173 -367.894,-458.992 -560.601,-742.797c-192.707,-283.804 -444.977,-553.593 -441.474,-812.871c7.008,-259.278 273.294,-504.541 550.09,-637.684c276.797,-133.143 567.609,-147.158 868.932,-164.677c301.323,-17.519 616.662,-31.534 791.85,119.128Z" fill-rule="evenodd" clip-rule="evenodd" filter="url(#inset-shadow)"/>
              </clipPath>
              <filter id='inset-shadow'>
                <feOffset dx='0' dy='0' />
                <feGaussianBlur stdDeviation='40' result='offset-blur' />
                <feComposite operator='out' in='SourceGraphic' in2='offset-blur' result='inverse' />
                <feFlood flood-color='black' flood-opacity='.95' result='color' />
                <feComposite operator='in' in='color' in2='inverse' result='shadow' />
                <feComposite operator='over' in='shadow' in2='SourceGraphic' /> 
              </filter>
            </defs>
          </svg>
        </MotionFade>
      </div>
    </section>
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import SiteHeader from '@/components/SiteHeader.vue'
import MotionFade from '@/components/MotionFade.vue'
import MotionFadeRight from '@/components/MotionFadeRight.vue'
</script>