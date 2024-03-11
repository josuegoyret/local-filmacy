<template>
  <main class="bg-neutral-darker-500 min-h-screen text-body-500 font-body">
    <div class="max-w-6xl mx-auto px-4 md:px-10">
      <TopBar />
      <VideoPlayer v-if="videosStore.isVideoPlayerVisible" />
      <RouterView />
    </div>
    <FooterSection />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useVideosStore } from './stores/videos'
import VideoPlayer from './components/VideoPlayer.vue'
import TopBar from './components/TopBar.vue'
import FooterSection from './components/ui/FooterSection.vue'

const videosStore = useVideosStore()
</script>
