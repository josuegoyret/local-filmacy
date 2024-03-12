<template>
  <nav class="flex justify-between items-center py-4 md:py-8">
    <TopBarLogo />
    <div class="flex gap-4 md:gap-8">
      <RouterLink
        class="py-1 text-md md:text-lg font-bold hover:text-display-500 hover:scale-105 transition-all"
        active-class="border-b-2 border-display-500 text-display-500 scale-105"
        to="/"
      >
        Home
      </RouterLink>
      <RouterLink
        class="py-1 text-md md:text-lg font-bold hover:text-display-500 hover:scale-105 transition-all"
        active-class="border-b-2 border-display-500 text-display-500 scale-105"
        to="/favorites"
      >
        Favorites
      </RouterLink>
      <RouterLink
        class="py-1 text-md md:text-lg font-bold hover:text-display-500 hover:scale-105 transition-all"
        active-class="border-b-2 border-display-500 text-display-500 scale-105"
        to="/trash"
      >
        Trash
      </RouterLink>
    </div>
    <UploadWrapper>
      <IconUpload class="cursor-pointer hover:text-display-500 hover:scale-105 transition-all" />
    </UploadWrapper>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import IconUpload from './icons/IconUpload.vue'
import TopBarLogo from './ui/TopBarLogo.vue'
import UploadWrapper from './UploadWrapper.vue'
</script>
