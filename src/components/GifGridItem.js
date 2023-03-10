import React from 'react'

export const GifGridItem = ( { id, title, url } ) => {

  return (
    <div className="card animate__animated animate__fadeInUp animate__faster">
        <p> { title } </p>
        <img src={ url } alt={ title } />
    </div>
  )

}
