import React from 'react'

const Card = (props) => {
	const { id, name, email } = props.robot
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bu2 shadow-5'>
      <img src={`https://robohash.org/${id}?size=200x200`} alt='robot' />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card