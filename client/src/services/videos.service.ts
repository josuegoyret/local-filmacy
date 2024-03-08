import axios from 'axios'
import { API_URL } from '@/lib/config'

export const uploadVideoToServer = async (file: File) => {
  const formData = new FormData()
  formData.append('videofile', file)
  const response = await axios.post(`${API_URL}/upload-video`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  return response.data
}
