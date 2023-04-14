import { type FC } from 'react'
import { Search as SearchIcon } from 'react-feather'

const Search: FC = () => {
  return (
    <form>
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
          Search
      </label>

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
        <button
          type="submit"
          className="text-white absolute right-1.5 bottom-1.5 bg-gray-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2">
            Search
        </button>
      </div>
    </form>
  )
}

export default Search
