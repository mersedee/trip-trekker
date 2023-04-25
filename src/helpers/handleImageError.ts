import { type SyntheticEvent } from 'react'
import sampleSrc from '@/assets/images/sample-restaurant.png'

const handleImageError = (e: SyntheticEvent<HTMLImageElement>): void => {
  const target = e.target as HTMLImageElement
  target.src = sampleSrc
}

export default handleImageError
