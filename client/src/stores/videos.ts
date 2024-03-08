import { defineStore } from 'pinia'
import { uploadVideoToServer } from '@/services/videos.service'

export const useVideosStore = defineStore('videos', () => {
  const uploadVideo = async (file: File) => {
    const response = await uploadVideoToServer(file)
    console.log({ response })
  }

  return { uploadVideo }
})
