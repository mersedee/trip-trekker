import { type FC } from 'react'
import sampleSrc from '@/assets/images/sample.png'

const Card: FC = () => {
  return (
    <div className="max-w-sm bg-white border border-gray-50 rounded-xl shadow h-fit">
      <a className="block pt-3 px-3" href="/">
        <img className="rounded-xl" src={sampleSrc} alt="sample"/>
      </a>

      <div className="p-4">
        <a href="/">
          <h5 className="mb-2 text-xl font-bold tracking-tight">
              Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">
            Here are the biggest enterprise technology
            acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </div>
    </div>

  )
}

export default Card
