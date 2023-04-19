import { type FC } from 'react'
import { type Restaurant } from '@/types'
import { Card } from '@/components'

interface Props {
  places: Restaurant[]
}

const PlaceList: FC<Props> = ({ places }) => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 w-fit mx-auto gap-6 pr-8 max-h-[90vh] overflow-y-auto">
      {places?.map((place: Restaurant) =>
        place.name
          ? (
            <Card
              key={place.location_id}
              name={place.name}
              photo={place.photo?.images.large.url}
              ranking={place.raw_ranking}
              address={`${place.address_obj?.street1}, ${place.address_obj?.city}`}
              description={place.description}
              website={place.website}
            />)
          : null)
      }
    </div>
  )
}

export default PlaceList
