import { type Dispatch, type FC, type SetStateAction, useState } from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { Search as SearchIcon } from 'react-feather'
import { type Coordinates } from '@/types'

interface Props {
  setCoordinates: Dispatch<SetStateAction<Coordinates>>
}

const Search: FC<Props> = ({ setCoordinates }) => {
  const [search, setSearch] = useState(null)

  const onLoad = (value: any): void => { setSearch(value) }

  const onPlaceChanged = (): void => {
    // @ts-expect-error getPlaces does not exist on type 'never'
    const lat = search?.getPlace().geometry.location.lat()
    // @ts-expect-error getPlaces does not exist on type 'never'
    const lng = search?.getPlace().geometry.location.lng()
    setCoordinates({ lat, lng })
  }

  return (
    <form>
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
          Search
      </label>

      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
            <SearchIcon size={22} strokeWidth={1} />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-3 pl-8 text-sm text-gray-900 border border-gray-200 rounded-3xl bg-gray-50 focus:outline-none"
            placeholder="Search places"
            required
          />
        </div>
      </Autocomplete>
    </form>
  )
}

export default Search
