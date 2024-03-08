<template>
  <nav class="flex justify-between items-center md:p-4">
    <div class="flex gap-3 bg-gray-50 text-gray-800">
      <RouterLink class="p-2" active-class="border-b-8 border-pastel-green-200" to="/">
        Home
      </RouterLink>
      <RouterLink class="p-2" active-class="border-b-8 border-pastel-green-200" to="/favorites">
        Favorites
      </RouterLink>
      <RouterLink class="p-2" active-class="border-b-8 border-pastel-green-200" to="/trash">
        Trash
      </RouterLink>
    </div>
    <div class="flex gap-2">
      <icon-upload class="cursor-pointer" @click="triggerInputFile" />
      <input
        type="file"
        class="hidden"
        ref="inputFile"
        accept=".mp4, .mov"
        @change="changeInputFile"
      />
      <icon-trash v-if="isTrash" />
    </div>
  </nav>
  <RouterView />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useVideosStore } from './stores/videos'
import IconUpload from '@/components/icons/IconUpload.vue'
import IconTrash from '@/components/icons/IconTrash.vue'

const router = useRouter()
const inputFile = ref<HTMLInputElement | null>(null)
const { uploadVideo } = useVideosStore()

const isTrash = computed(() => router.currentRoute.value.name === 'trash')

const triggerInputFile = () => inputFile.value?.click()
const changeInputFile = (e: Event) => {
  const file = (e.target as HTMLInputElement).files?.[0]
  file && uploadVideo(file)
}
</script>
