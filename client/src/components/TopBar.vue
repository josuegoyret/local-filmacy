<template>
  <nav class="flex justify-between items-center py-4 md:py-8">
    <TopBarLogo />
    <div class="flex gap-4 md:gap-8">
      <RouterLink
        class="py-1 text-lg font-bold hover:text-display-500 hover:scale-105 transition-all"
        active-class="border-b-2 border-display-500 text-display-500 scale-105"
        to="/"
      >
        Home
      </RouterLink>
      <RouterLink
        class="py-1 text-lg font-bold hover:text-display-500 hover:scale-105 transition-all"
        active-class="border-b-2 border-display-500 text-display-500 scale-105"
        to="/favorites"
      >
        Favorites
      </RouterLink>
      <RouterLink
        class="py-1 text-lg font-bold hover:text-display-500 hover:scale-105 transition-all"
        active-class="border-b-2 border-display-500 text-display-500 scale-105"
        to="/trash"
      >
        Trash
      </RouterLink>
    </div>
    <div class="flex gap-2">
      <IconUpload
        class="cursor-pointer hover:text-display-500 hover:scale-105 transition-all"
        @click="triggerInputFile"
      />
      <input
        type="file"
        class="hidden"
        ref="inputFile"
        accept=".mp4, .mov"
        @change="changeInputFile"
      />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useVideosStore } from '@/stores/videos'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import IconUpload from './icons/IconUpload.vue'
import TopBarLogo from './TopBarLogo.vue'

const videosStore = useVideosStore()

const inputFile = ref<HTMLInputElement | null>(null)

const triggerInputFile = () => inputFile.value?.click()
const changeInputFile = async (e: Event) => {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (file) {
    await videosStore.uploadVideo(file)
    await videosStore.getAllVideos()
  }
}
</script>
