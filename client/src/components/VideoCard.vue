<template>
  <div
    class="w-full aspect-video md:aspect-2/3 rounded-md relative border border-neutral-dark-500 hover:border-neutral-medium-500 hover:shadow hover:shadow-neutral-medium-500 transition-all overflow-hidden cursor-pointer"
  >
    <img :src="thumbnailURL" class="h-full w-full object-cover" alt="video thumbnail" />
    <div
      class="w-full h-full opacity-0 hover:opacity-100 flex flex-col justify-center items-center gap-4 absolute inset-0 hover:bg-black/50 transition-all"
    >
      <IconPlay
        @click="playVideo"
        class="w-10 h-10 md:w-12 md:h-12 hover:scale-105 transition-transform text-display-500"
      />
      <div class="w-full flex justify-between items-center p-4 absolute z-20 bottom-0">
        <p class="text-sm text-display-500">{{ props.video.filename }}</p>
        <div class="flex gap-2 items-center">
          <IconFavSolid
            v-if="props.video.isFavorite"
            @click="switchFav"
            class="cursor-pointer hover:scale-105 transition-transform hover:text-display-500"
          />
          <IconFav
            v-else
            @click="switchFav"
            class="cursor-pointer hover:scale-105 transition-transform hover:text-display-500"
          />
          <IconTrash
            @click="switchDel"
            class="cursor-pointer hover:scale-105 transition-transform hover:text-display-500"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Video } from '@/common/types'
import { computed } from 'vue'
import { getThumbnailURL } from '@/utils/videos.util'
import { useVideosStore } from '@/stores/videos'
import { useRouter } from 'vue-router'
import IconFav from './icons/IconFav.vue'
import IconPlay from './icons/IconPlay.vue'
import IconTrash from './icons/IconTrash.vue'
import IconFavSolid from './icons/IconFavSolid.vue'

interface VideoCardProps {
  video: Video
}

const videosStore = useVideosStore()

const props = defineProps<VideoCardProps>()
const thumbnailURL = computed(getThumbnailURL(props.video.filename))
const playVideo = () => {
  videosStore.selectedVideo = props.video.filename
  videosStore.isVideoPlayerVisible = true
}

const router = useRouter()

const currentRoute = computed(() => router.currentRoute.value.name)

const reloadVideos = async () => {
  switch (currentRoute.value) {
    case 'favorites':
      return await videosStore.getFavoriteVideos()
    case 'trash':
      return await videosStore.getDeletedVideos()
    default:
      return await videosStore.getAllVideos()
  }
}
const switchFav = async () => {
  await videosStore.switchFavoriteVideo(props.video.id)
  await reloadVideos()
}
const switchDel = async () => {
  await videosStore.switchDeleteVideo(props.video.id)
  await reloadVideos()
}
</script>
