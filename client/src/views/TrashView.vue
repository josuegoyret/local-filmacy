<template>
  <main class="pb-32">
    <h1 class="text-display-500 text-3xl md:text-7xl font-extrabold text-center py-32">
      Discard Depot
    </h1>
    <GridTitledSection
      :title="'Trashed Videos'"
      :videos="videosStore.deletedVideos"
      :icons="trashVideosIcons"
    />
  </main>
</template>

<script setup lang="ts">
import GridTitledSection from '@/components/ui/GridTitledSection.vue'
import { useVideosStore } from '@/stores/videos'
import { onMounted } from 'vue'

const videosStore = useVideosStore()

const trashVideosIcons = {
  fav: false,
  del: false
}

onMounted(() => {
  videosStore.getDeletedVideos()
})
</script>
