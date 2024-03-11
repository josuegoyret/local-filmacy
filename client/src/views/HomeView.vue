<template>
  <main class="pb-32">
    <HomeHero />
    <HomeContent :all-videos="videosStore.allVideos" />
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useVideosStore } from '@/stores/videos'
import HomeHero from '@/components/ui/HomeHero.vue'
import HomeContent from '@/components/ui/HomeContent.vue'

const videosStore = useVideosStore()

onMounted(() => {
  videosStore.getAllVideos()
})
</script>
