import { type FC } from 'react'
import { type Place } from '@/types'
import { Card, Loading } from '@/components'

interface Props {
  loading: boolean
  places: Place[]
}

const PlaceList: FC<Props> = ({ loading, places }) => {
  return loading
    ? (
      <div className="flex justify-center items-center max-h-[90vh]">
        <Loading />
      </div>)
    : (
      <div className="grid sm:grid-cols-2 grid-cols-1 w-fit mx-auto gap-6 pr-8 max-h-[90vh] overflow-y-auto">
        {places?.map((place: Place) =>
          <Card
            key={place.place_id}
            name={place.name}
            photo={place.photos_sample ? place.photos_sample[0].photo_url : undefined}
            ranking={place.rating}
            address={place.address}
            description={place.about?.summary}
            website={place.website}
          />)
        }
      </div>)
}

export default PlaceList
