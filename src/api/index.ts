import axios from 'axios'

export const getLocalBusiness = async (type: string): Promise<any> => {
  try {
    const { data } = await axios.get(`http://localhost:3500/${type}`)
    console.warn(data)
    return data
  } catch (error) {
    console.error(error)
  }
}
