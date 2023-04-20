import React from 'react'

const Loading = () => {
  const divs = Array.from({ length: 12 }, (_, i) => <div key={i} />)
  return (
    <div className="lds-default">
      {divs}
    </div>
  )
}

export default Loading
