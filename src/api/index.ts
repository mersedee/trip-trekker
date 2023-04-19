import axios from 'axios'
import { type Coordinates } from '@/types'

export const getPlaces = async (type: string, ne: Coordinates, sw: Coordinates): Promise<any> => {
  const options = {
    params: {
      bl_latitude: sw.lat,
      tr_latitude: ne.lat,
      bl_longitude: sw.lng,
      tr_longitude: ne.lng
    },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_TRAVEL_API_KEY,
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  }
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, options)
    return data
  } catch (error) {
    console.error(error)
  }
}
