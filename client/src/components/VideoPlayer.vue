<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-neutral-medium-500 bg-opacity-75 transition-opacity"></div>

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex h-full items-center justify-center p-4 text-center">
        <div
          class="relative transform overflow-hidden rounded-lg bg-neutral-medium-500 shadow-xl transition-all sm:my-8 w-full max-h-full sm:max-w-6xl"
        >
          <span
            class="absolute bg-neutral-dark-500/35 rounded-full p-1 top-2 right-2 z-20 cursor-pointer hover:text-display-500 hover:scale-105 transition-all"
            @click="closeVideo"
          >
            <IconClose />
          </span>
          <video controls autoplay class="w-full aspect-video">
            <source :src="videoURL" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getVideoURL } from '@/utils/videos.util'
import { useVideosStore } from '@/stores/videos'
import IconClose from './icons/IconClose.vue'

const videosStore = useVideosStore()

const videoURL = videosStore.selectedVideo && computed(getVideoURL(videosStore.selectedVideo))
const closeVideo = () => {
  videosStore.selectedVideo = ''
  videosStore.isVideoPlayerVisible = false
}
</script>
