<template>
  <section class="flex flex-col gap-4">
    <h2 class="text-display-500 text-xl font-bold">My List</h2>
    <div
      v-if="allVideos.length"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <VideoCard v-for="video in props.allVideos" :video="video" :key="video.id" />
    </div>
    <div
      v-else
      class="w-full h-32 flex justify-center items-center rounded-md bg-neutral-dark-500 border border-neutral-medium-500"
    >
      <p class="text-xl font-bold">No videos found</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Video } from '@/common/types'
import VideoCard from '../VideoCard.vue'

interface HomeContentProps {
  allVideos: Video[]
}
const props = defineProps<HomeContentProps>()
</script>
