<template>
  <section class="flex flex-col gap-4 pb-12">
    <h2 class="text-display-500 text-xl font-bold">{{ props.title }}</h2>
    <div
      v-if="videos.length"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <VideoCard
        v-for="video in props.videos"
        :video="video"
        :icons="props.icons"
        :key="video.id"
      />
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
  title: string
  icons?: {
    fav?: boolean
    del?: boolean
  }
  videos: Video[]
}
const props = defineProps<HomeContentProps>()
</script>
