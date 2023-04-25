import { type FC, useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Header, Map, DropDown } from '@/components'
import { getLocalBusiness } from '@/api'
import { type Place, type Coordinates, type Menu } from '@/types'
import PlaceList from '@/pages/Home/PlaceList'
import { menus, rates } from '@/static'

const coordinates: Coordinates = { lat: 52.377956, lng: 4.897070 }
const initialRating = { label: 'Rating', value: '0' }

const Home: FC = () => {
  const [showMap, setShowMap] = useState<boolean>(true)
  const [filteredPlaces, setFilteredPlaces] = useState<Place[]>([])
  const [rating, setRating] = useState<Menu>(initialRating)
  const [type, setType] = useState<Menu>(menus[0])
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const { data: places = [], isLoading } = useQuery<Place[]>(
    {
      queryKey: ['places', type.value],
      queryFn: async () => {
        setRating(initialRating)
        setFilteredPlaces([])
        return await getLocalBusiness(type.value)
      }
    })

  useEffect(() => {
    const filtered = places?.filter(place => place.rating > Number(rating.value))
    setFilteredPlaces(filtered ?? [])
  }, [rating])

  const onToggleMap = (): void => { setShowMap((prevState: boolean) => !prevState) }

  const onHover = (id: string | null): void => { setHoveredId(id) }

  return (
    <>
      <div className="sticky top-0">
        <Header />

        <div className="flex gap-6 px-4 py-4 bg-white overflow-x-auto overflow-y-hidden">
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
            className="md:hidden block text-sm border border-gray-50 w-[150px] min-w-[150px] text-center focus:outline-none py-2.5 font-medium rounded-lg">
            {showMap ? 'Hide' : 'Show'} Map
          </button>
        </div>

        <hr className="my-0 border-gray-50" />
      </div>

      <div className="md:grid hidden grid-cols-2 pl-4">
        <PlaceList
          className="my-4"
          loading={isLoading}
          onHover={onHover}
          places={filteredPlaces?.length ? filteredPlaces : places}
        />
        <Map
          hoverId={hoveredId}
          places={filteredPlaces?.length ? filteredPlaces : places}
          className="sticky h-[calc(100vh_-_142px)] top-[142px] mt-[-16px]"
          coordinates={coordinates}
        />
      </div>

      <div className="md:hidden block">
        {showMap
          ? <Map
            hoverId={hoveredId}
            places={filteredPlaces?.length ? filteredPlaces : places}
            className="sticky h-[calc(100vh_-_142px)] top-[142px]"
            coordinates={coordinates}
          />
          : <PlaceList
            className="my-4 pl-4"
            loading={isLoading}
            onHover={onHover}
            places={filteredPlaces?.length ? filteredPlaces : places}
          />
        }
      </div>
    </>
  )
}

export default Home
