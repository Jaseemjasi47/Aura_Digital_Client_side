import React from 'react'
import RatingStars from './RatingStars'

function Reviews() {
  return (
    <div>
      <RatingStars rating={3.5}  />
      <RatingStars  rating={4.5} />
    </div>
  )
}

export default Reviews
