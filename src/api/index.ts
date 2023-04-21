import axios from 'axios'

export const getLocalBusiness = async (type: string, lat: number, lng: number): Promise<any> => {
  const options = {
    params: {
      query: type,
      limit: '20',
      lat,
      lng,
      zoom: '13'
    },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_BUSINESSES_API_KEY,
      'X-RapidAPI-Host': 'local-business-data.p.rapidapi.com'
    }
  }

  try {
    const { data: { data } } = await axios.get('https://local-business-data.p.rapidapi.com/search', options)
    console.warn(data)
    return data
  } catch (error) {
    console.error(error)
  }
}
