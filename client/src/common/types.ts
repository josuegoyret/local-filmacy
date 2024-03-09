export interface Video {
  id: number
  filename: string
  duration: string
  isFavorite: 0 | 1
  isDeleted: 0 | 1
}

export interface UploadVideoData {
  message: string
  video: string
}

export interface GetVideosData {
  message: string
  videos: Video[]
}
