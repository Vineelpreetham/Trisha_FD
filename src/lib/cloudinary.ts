const CLOUD_NAME = 'dbeh0eisn'

/**
 * Generate a Cloudinary fetch URL for an external image.
 * Use this for images that can't use next/image (e.g., with GSAP refs or Framer Motion).
 */
export function getCldImageUrl(
  src: string,
  options?: { width?: number; quality?: number | 'auto' }
) {
  const width = options?.width || 1200
  const quality = options?.quality || 'auto'
  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality}`]
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/fetch/${params.join(',')}/${encodeURIComponent(src)}`
}

/**
 * Generate a Cloudinary upload URL for images uploaded to your Cloudinary Media Library.
 * Use this when you upload Trisha's actual images to Cloudinary.
 * 
 * @example getCldUploadUrl('trisha-portfolio/hero-cover.jpg', { width: 1920 })
 */
export function getCldUploadUrl(
  publicId: string,
  options?: { width?: number; quality?: number | 'auto' }
) {
  const width = options?.width || 1200
  const quality = options?.quality || 'auto'
  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality}`]
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${params.join(',')}/${publicId}`
}

/**
 * Generate a Cloudinary video URL for videos uploaded to your Cloudinary Media Library.
 * 
 * @example getCldVideoUrl('trisha-portfolio/videos/showreel.mp4', { width: 1920 })
 */
export function getCldVideoUrl(
  publicId: string,
  options?: { width?: number; quality?: number | 'auto' }
) {
  const width = options?.width || 1920
  const quality = options?.quality || 'auto'
  const params = ['f_auto', `w_${width}`, `q_${quality}`]
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${params.join(',')}/${publicId}`
}
