import { type FC } from 'react'
import { type Restaurant } from '@/types'
import { Card, Loading } from '@/components'

interface Props {
  loading: boolean
  places: Restaurant[]
}

const PlaceList: FC<Props> = ({ loading, places }) => {
  return loading
    ? (
      <div className="flex justify-center items-center max-h-[90vh]">
        <Loading />
      </div>)
    : (
      <div className="grid sm:grid-cols-2 grid-cols-1 w-fit mx-auto gap-6 pr-8 max-h-[90vh] overflow-y-auto">
        {places?.map((place: Restaurant) =>
          <Card
            key={place.location_id}
            name={place.name}
            photo={place.photo?.images.large.url}
            ranking={place.raw_ranking}
            address={`${place.address_obj?.street1}, ${place.address_obj?.city}`}
            description={place.description}
            website={place.website}
          />)
        }
      </div>)
}

export default PlaceList
