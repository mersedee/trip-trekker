import { type FC, type Dispatch, type SetStateAction } from 'react'
import { DropDown, Header } from '@/components'
import { menus, rates } from '@/static'
import { type Menu } from '@/types'

interface Props {
  searchParams: any
  setSearchParams: any
  rating: Menu
  setRating: Dispatch<SetStateAction<Menu>>
  type: Menu
  setType: Dispatch<SetStateAction<Menu>>
  showMap: boolean
  onToggleMap: () => void
}

const HeaderSection: FC<Props> = ({
  searchParams,
  setSearchParams,
  rating,
  setRating,
  type,
  setType,
  showMap,
  onToggleMap
}) => {
  const onChangeRating = (option: Menu): void => {
    setRating(option)
    searchParams.set('rating', option.value)
    setSearchParams(searchParams)
  }

  const onChangeType = (option: Menu): void => {
    setType(option)
    searchParams.set('type', option.value)
    setSearchParams(searchParams)
  }

  return (
    <>
      <Header />

      <div className="flex gap-6 px-4 py-4 bg-white overflow-x-auto overflow-y-hidden">
        <DropDown
          menus={menus}
          width={150}
          selectedOption={type}
          onChange={onChangeType}
        />
        <DropDown
          menus={rates}
          width={150}
          selectedOption={rating}
          onChange={onChangeRating}
        />
        <button
          type="button"
          onClick={onToggleMap}
          className="md:hidden block text-sm border border-gray-50 w-[150px] min-w-[150px] text-center focus:outline-none py-2.5 font-medium rounded-lg">
          {showMap ? 'Hide' : 'Show'} Map
        </button>
      </div>

      <hr className="my-0 border-gray-50" />
    </>
  )
}

export default HeaderSection
