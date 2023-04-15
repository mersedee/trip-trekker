import { type FC } from 'react'
import Header from '@/components/Header'
import Card from '@/components/Card'
import Map from '@/components/Map'
import DropDown from '@/components/DropDown'

const menus = [
  { label: 'Restaurants', value: 'restaurant' },
  { label: 'Hotels', value: 'hotels' },
  { label: 'Attractions', value: 'attraction' }
]

const Home: FC = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-2 py-8 px-4">
        <div>
          <DropDown menus={menus} width={150} />
          <div className="grid grid-cols-2 gap-6 pr-8 pt-4">
            <Card />
            <Card />
          </div>
        </div>

        <div className="relative rounded-xl overflow-hidden"><Map /></div>
      </div>
    </>
  )
}

export default Home
