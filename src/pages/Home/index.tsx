import { type FC, useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { getLocalBusiness } from '@/api'
import { type Place, type Menu } from '@/types'
import { menus, rates } from '@/static'
import HeaderSection from '@/pages/Home/HeaderSection'
import ContentSection from '@/pages/Home/ContentSection'

const getSearchParamsValue = (
  searchParams: any,
  paramName: string,
  options: Menu[],
  defaultValue: Menu): Menu => {
  const paramValue = searchParams.get(paramName)
  const option = options.find(option => option.value === paramValue)

  return option ?? defaultValue
}

const Home: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const findRateParam = getSearchParamsValue(searchParams, 'rating', rates, { label: 'Rating', value: '0' })
  const findTypeParam = getSearchParamsValue(searchParams, 'type', menus, menus[0])

  const [showMap, setShowMap] = useState<boolean>(true)
  const [filteredPlaces, setFilteredPlaces] = useState<Place[]>([])
  const [rating, setRating] = useState<Menu>(findRateParam)
  const [type, setType] = useState<Menu>(findTypeParam)
  const [placeHoveredId, setPlaceHoveredId] = useState<string | null>(null)

  const { data: places = [], isLoading } = useQuery<Place[]>(
    {
      queryKey: ['places', type.value],
      queryFn: async () => await getLocalBusiness(type.value)
    })

  useEffect(() => {
    const filtered = places?.filter(place => place.rating > Number(rating.value))
    setFilteredPlaces(filtered ?? [])
    console.warn(filtered)
  }, [rating, places])

  const onToggleMap = (): void => { setShowMap((prevState: boolean) => !prevState) }

  const onHoverPlace = (id: string | null): void => { setPlaceHoveredId(id) }

  return (
    <>
      <div className="sticky top-0">
        <HeaderSection
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          rating={rating}
          setRating={setRating}
          type={type}
          setType={setType}
          showMap={showMap}
          onToggleMap={onToggleMap}
        />
      </div>

      <ContentSection
        isLoading={isLoading}
        places={places}
        filteredPlaces={filteredPlaces}
        showMap={showMap}
        placeHoveredId={placeHoveredId}
        onHoverPlace={onHoverPlace}
      />
    </>
  )
}

export default Home
