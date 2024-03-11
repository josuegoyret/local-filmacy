<template>
  <section>
    <div class="flex flex-col gap-16 items-center py-32">
      <div class="flex flex-col items-center gap-8">
        <HeroTitle />
        <p class="text-xl md:text-2xl text-center max-w-80 md:max-w-none">
          Discover your creativity by generating a vast library of content now!
        </p>
      </div>
      <UploadWrapper>
        <ButtonPrimary>
          Start Uploading
          <IconUpload />
        </ButtonPrimary>
      </UploadWrapper>
    </div>
  </section>
</template>

<script setup lang="ts">
import UploadWrapper from '../UploadWrapper.vue'
import IconUpload from '../icons/IconUpload.vue'
import ButtonPrimary from './ButtonPrimary.vue'
import HeroTitle from './HeroTitle.vue'
</script>
