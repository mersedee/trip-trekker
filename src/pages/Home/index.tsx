import { type FC, useEffect, useState } from 'react'
import { Header, Map, DropDown } from '@/components'
import { getLocalBusiness } from '@/api'
import { type Place, type Coordinates, type Menu } from '@/types'
import PlaceList from '@/pages/Home/PlaceList'
import { menus, rates } from '@/static'

const Home: FC = () => {
  const coordinates: Coordinates = { lat: 52.377956, lng: 4.897070 }
  const [loading, setLoading] = useState<boolean>(false)
  const [showMap, setShowMap] = useState<boolean>(true)
  const [places, setPlaces] = useState<Place[]>([])
  const [filteredPlaces, setFilteredPlaces] = useState<Place[]>([])
  const [rating, setRating] = useState<Menu>({ label: 'Rating', value: '0' })
  const [type, setType] = useState<Menu>({ label: 'Type', value: 'restaurants' })

  useEffect(() => {
    setLoading(true)
    getLocalBusiness(type.value).then((data) => {
      setPlaces(data?.filter((place: Place) => place.name))
      setFilteredPlaces([])
      setLoading(false)
    }).catch((error) => { console.log(error) })
  }, [type])

  useEffect(() => {
    const filtered = places.filter(place => Number(place.rating) > Number(rating.value))
    setFilteredPlaces(filtered)
  }, [rating])

  const onToggleMap = (): void => { setShowMap((prevState: boolean) => !prevState) }

  return (
    <>
      <Header />

      <div className="flex flex-wrap gap-6 px-4 my-4">
        <DropDown
          menus={menus}
          width={150}
          selectedOption={type}
          setSelectedOption={setType}
        />
        <DropDown
          menus={rates}
          width={150}
          selectedOption={rating}
          setSelectedOption={setRating}
        />
        <button
          type="button"
          onClick={onToggleMap}
          className="md:hidden block text-sm border border-gray-50 w-[150px] text-center focus:outline-none py-2.5 font-medium rounded-lg">
          {showMap ? 'Hide' : 'Show'} Map
        </button>
      </div>

      <div className="md:grid hidden grid-cols-2 px-4">
        <PlaceList loading={loading} places={filteredPlaces.length ? filteredPlaces : places} />
        <Map
          places={filteredPlaces.length ? filteredPlaces : places}
          className="relative rounded-xl overflow-hidden"
          coordinates={coordinates}
        />
      </div>

      <div className="md:hidden block px-4">
        {showMap
          ? <Map
            places={filteredPlaces.length ? filteredPlaces : places}
            className="relative rounded-xl overflow-hidden"
            coordinates={coordinates}
          />
          : <PlaceList loading={loading} places={filteredPlaces.length ? filteredPlaces : places} />
        }
      </div>
    </>
  )
}

export default Home
