<template>
  <div class="absolute w-full h-full z-50 bg-black p-2">
    <span
      class="absolute bg-white p-2 rounded-full top-1 right-1 z-20 cursor-pointer"
      @click="closeVideo"
    >
      <icon-close />
    </span>
    <video controls autoplay class="w-full">
      <source :src="videoURL" type="video/mp4" />
    </video>
  </div>
</template>

<script setup lang="ts">
import IconClose from './icons/IconClose.vue'
import { computed } from 'vue'
import { getVideoURL } from '@/utils/videos.util'
import { useVideosStore } from '@/stores/videos'

const videosStore = useVideosStore()

const videoURL = videosStore.selectedVideo && computed(getVideoURL(videosStore.selectedVideo))
const closeVideo = () => {
  videosStore.selectedVideo = ''
  videosStore.isVideoPlayerVisible = false
}
</script>
