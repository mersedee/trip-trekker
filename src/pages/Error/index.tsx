import { type FC } from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage: FC = () => {
  const error: any = useRouteError()

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="text-center">
        <h1 className="text-2xl">Oops!</h1>
        <p className="my-3 text-lg">Sorry, an unexpected error has occurred.</p>
        <p className="text-lg">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  )
}

export default ErrorPage
