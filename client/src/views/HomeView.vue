<template>
  <main class="pb-32">
    <HomeHero />
    <GridTitledSection :title="'My List'" :videos="videosStore.allVideos" />
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useVideosStore } from '@/stores/videos'
import HomeHero from '@/components/ui/HomeHero.vue'
import GridTitledSection from '@/components/ui/GridTitledSection.vue'

const videosStore = useVideosStore()

onMounted(() => {
  videosStore.getAllVideos()
})
</script>
