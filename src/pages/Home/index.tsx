import { type FC, useEffect, useState } from 'react'
import Header from '@/components/Header'
import Card from '@/components/Card'
import Map from '@/components/Map'
import DropDown from '@/components/DropDown'
import { getPlaces } from '@/api'
import { type Restaurant } from '@/types/api'

const menus = [
  { label: 'Restaurants', value: 'restaurant' },
  { label: 'Hotels', value: 'hotels' },
  { label: 'Attractions', value: 'attraction' }
]

const rates = [
  { value: '0', label: 'All' },
  { value: '3', label: 'Above 3.0' },
  { value: '4', label: 'Above 4.0' },
  { value: '5', label: 'Above 4.5' }
]

const Home: FC = () => {
  const [places, setPlaces] = useState<Restaurant[]>([])
  const [coordinates, setCoordinates] = useState<any>({ lat: 52.13, lng: 5.29 })
  const [bounds, setBounds] = useState<any>()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude })
    })
  }, [])

  useEffect(() => {
    getPlaces(bounds.ne, bounds.sw).then((data) => { setPlaces(data) })
  }, [coordinates, bounds])

  return (
    <>
      <Header />
      <div className="grid grid-cols-2 py-8 px-4">
        <div>
          <div className="flex gap-6">
            <DropDown label="Type" menus={menus} width={150} />
            <DropDown label="Rates" menus={rates} width={150} />
          </div>

          <div className="grid grid-cols-2 gap-6 pr-8 pt-4">
            <Card />
            <Card />
          </div>
        </div>

        <div className="relative rounded-xl overflow-hidden">
          <Map
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
          />
        </div>
      </div>
    </>
  )
}

export default Home
