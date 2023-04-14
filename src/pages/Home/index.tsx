import { type FC } from 'react'
import Header from '@/components/Header'
import Card from '@/components/Card'
import Map from '@/components/Map'

const Home: FC = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-2 px-4 py-8">
        <div className="grid grid-cols-2 gap-6 pr-8">
          <Card />
          <Card />
        </div>
        <div className="relative rounded-xl overflow-hidden"><Map /></div>
      </div>
    </>
  )
}

export default Home
