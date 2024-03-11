<template>
  <div class="flex gap-2 cursor-pointer" @click="triggerInputFile">
    <slot></slot>
    <input
      type="file"
      class="hidden"
      ref="inputFile"
      accept=".mp4, .mov"
      @change="changeInputFile"
    />
  </div>
</template>

<script setup lang="ts">
import { useVideosStore } from '@/stores/videos'
import { ref } from 'vue'

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
