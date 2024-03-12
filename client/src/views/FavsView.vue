<template>
  <main class="pb-32">
    <h1 class="text-display-500 text-7xl font-extrabold text-center py-32">Cherished Selections</h1>
    <GridTitledSection
      :title="'My Favorites'"
      :videos="videosStore.favoriteVideos"
      :icons="favVideosIcons"
    />
  </main>
</template>

<script setup lang="ts">
import GridTitledSection from '@/components/ui/GridTitledSection.vue'
import { useVideosStore } from '@/stores/videos'
import { onMounted } from 'vue'

const videosStore = useVideosStore()

const favVideosIcons = {
  fav: true,
  del: true
}

onMounted(() => {
  videosStore.getFavoriteVideos()
})
</script>
