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
    <icon-upload />
  </nav>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import IconUpload from '@/components/icons/IconUpload.vue'
</script>
