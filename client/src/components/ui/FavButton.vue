<template>
  <IconFavSolid
    v-if="props.isFavorite"
    @click="props.switchFav"
    class="cursor-pointer hover:scale-105 transition-transform hover:text-display-500"
  />
  <IconFav
    v-else
    @click="props.switchFav"
    class="cursor-pointer hover:scale-105 transition-transform hover:text-display-500"
  />
</template>

<script setup lang="ts">
import IconFav from '../icons/IconFav.vue'
import IconFavSolid from '../icons/IconFavSolid.vue'

interface FavButtonProps {
  isFavorite: 0 | 1
  switchFav: () => void
}

const props = defineProps<FavButtonProps>()
</script>
