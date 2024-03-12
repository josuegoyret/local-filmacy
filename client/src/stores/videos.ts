import type { Video } from '@/common/types'
import { defineStore } from 'pinia'
import {
  getAllVideosFromServer,
  getDeletedVideosFromServer,
  getFavoriteVideosFromServer,
  switchDeleteVideoInServer,
  switchFavotireVideoInServer,
  uploadVideoToServer
} from '@/services/videos.service'
import { ref, type Ref } from 'vue'

export const useVideosStore = defineStore('videos', () => {
  const allVideos: Ref<Video[]> = ref([])
  const favoriteVideos: Ref<Video[]> = ref([])
  const deletedVideos: Ref<Video[]> = ref([])
  const isVideoPlayerVisible: Ref<boolean> = ref(false)
  const selectedVideo: Ref<string | undefined> = ref(undefined)

  const uploadVideo = async (file: File) => {
    await uploadVideoToServer(file)
  }

  const switchFavoriteVideo = async (id: number) => {
    await switchFavotireVideoInServer(id)
  }

  const switchDeleteVideo = async (id: number) => {
    await switchDeleteVideoInServer(id)
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
    switchFavoriteVideo,
    switchDeleteVideo,
    getAllVideos,
    getFavoriteVideos,
    getDeletedVideos,
    allVideos,
    favoriteVideos,
    deletedVideos,
    isVideoPlayerVisible,
    selectedVideo
  }
})
