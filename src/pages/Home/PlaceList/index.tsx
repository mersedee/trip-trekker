import { type FC } from 'react'
import { type Place } from '@/types'
import { Card, Loading } from '@/components'

interface Props {
  loading: boolean
  places: Place[]
  onHover: (arg: string | null) => void
}

const PlaceList: FC<Props> = ({ loading, places, onHover }) => {
  return loading
    ? (
      <div className="flex justify-center items-center max-h-[90vh]">
        <Loading />
      </div>)
    : (
      <div className="grid sm:grid-cols-2 grid-cols-1 w-fit mx-auto gap-6 pr-8 max-h-[90vh] overflow-y-auto">
        {places?.map((place: Place) =>
          <div
            key={place.place_id}
            onMouseOver={() => { onHover(place.place_id) }}
            onMouseLeave={() => { onHover(null) }}
          >
            <Card
              name={place.name}
              photo={place.photos_sample ? place.photos_sample[0].photo_url : undefined}
              ranking={place.rating}
              address={`${place.street_address}, ${place.city}`}
              description={place.about?.summary}
              website={place.website}
            />
          </div>
        )
        }
      </div>)
}

export default PlaceList
