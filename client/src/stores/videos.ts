import type { Video } from '@/common/types'
import { defineStore } from 'pinia'
import {
  getAllVideosFromServer,
  getDeletedVideosFromServer,
  getFavoriteVideosFromServer,
  uploadVideoToServer
} from '@/services/videos.service'
import { ref, type Ref } from 'vue'

export const useVideosStore = defineStore('videos', () => {
  const allVideos: Ref<Video[]> = ref([])
  const favoriteVideos: Ref<Video[]> = ref([])
  const deletedVideos: Ref<Video[]> = ref([])

  const uploadVideo = async (file: File) => {
    const data = await uploadVideoToServer(file)
    console.log({ data })
  }

  const getAllVideos = async () => {
    const data = await getAllVideosFromServer()
    allVideos.value = data.videos
  }

  const getFavoriteVideos = async () => {
    const data = await getFavoriteVideosFromServer()
    favoriteVideos.value = data.videos
  }

  const getDeletedVideos = async () => {
    const data = await getDeletedVideosFromServer()
    deletedVideos.value = data.videos
  }

  return {
    uploadVideo,
    getAllVideos,
    getFavoriteVideos,
    getDeletedVideos,
    allVideos,
    favoriteVideos,
    deletedVideos
  }
})
