<template>
  <main>
    <h1 class="flex gap-2 items-center">Home</h1>
    <div class="flex flex-col md:flex-wrap md:flex-row gap-10">
      <video-card v-for="video in videosStore.allVideos" :video="video" :key="video.id" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useVideosStore } from '@/stores/videos'
import VideoCard from '@/components/VideoCard.vue'

const videosStore = useVideosStore()

onMounted(() => {
  videosStore.getAllVideos()
})
</script>
