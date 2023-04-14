import { type FC } from 'react'
import Header from '@/components/Header'
import Card from '@/components/Card'

const Home: FC = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-2 px-4 py-8">
        <div className="grid grid-cols-2 gap-6">
            <Card />
            <Card />
        </div>
        <div>map</div>
      </div>
    </>
  )
}

export default Home
