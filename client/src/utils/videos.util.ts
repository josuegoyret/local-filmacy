import { API_URL } from '@/lib/config'

export const getThumbnailURL = (filename: string) => {
  return (): string => {
    const imageName = filename.replace('.mp4', '.jpg')
    return `${API_URL}/uploads/thumbnails/${imageName}`
  }
}
