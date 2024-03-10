<template>
  <div class="flex w-full md:w-64 md:h-80 mb-2 rounded-md relative shadow-md shadow-black/60">
    <div class="absolute w-full h-full bg-gradient-to-t from-black/10 to-white/10 rounded-md">
      <img
        :src="thumbnailURL"
        @click="playVideo"
        class="h-full w-full rounded-md z-0 object-cover cursor-pointer"
        alt="video thumbnail"
      />
      <div class="flex gap-4 absolute bottom-4 right-4 z-20 w-full px-4">
        <icon-trash
          class="cursor-pointer hover:scale-125 transition-transform text-white shadow-white"
        />
        <icon-fav
          class="cursor-pointer hover:scale-125 transition-transform text-white shadow-white"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { VideoCardProps } from '@/common/types'
import IconFav from './icons/IconFav.vue'
import IconTrash from './icons/IconTrash.vue'
import { computed } from 'vue'
import { getThumbnailURL } from '@/utils/videos.util'
import { useVideosStore } from '@/stores/videos'

const videosStore = useVideosStore()

const props = defineProps<VideoCardProps>()
const thumbnailURL = computed(getThumbnailURL(props.video.filename))
const playVideo = () => {
  videosStore.selectedVideo = props.video.filename
  videosStore.isVideoPlayerVisible = true
}
</script>
