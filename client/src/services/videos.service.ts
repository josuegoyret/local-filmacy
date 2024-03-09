import axios from 'axios'
import { API_URL } from '@/lib/config'
import type { GetVideosData, UploadVideoData } from '@/common/types'

// TODO: add error handling
export const uploadVideoToServer = async (file: File): Promise<UploadVideoData> => {
  const formData = new FormData()
  formData.append('videofile', file)
  const response = await axios.post(`${API_URL}/upload-video`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  return response.data
}

export const getAllVideosFromServer = async (): Promise<GetVideosData> => {
  const response = await axios.get(`${API_URL}/get-all-videos`)
  return response.data
}

export const getFavoriteVideosFromServer = async (): Promise<GetVideosData> => {
  const response = await axios.get(`${API_URL}/get-favorite-videos`)
  return response.data
}

export const getDeletedVideosFromServer = async (): Promise<GetVideosData> => {
  const response = await axios.get(`${API_URL}/get-deleted-videos`)
  return response.data
}
