import React from 'react'
import { Link } from 'react-router-dom';

const NoPage = () => {
  return (
   <div className='card align-items-center justify-content-center w-50 centerDiv p-4'>
      <h3>Sorry you are redirected At wrong place</h3> <Link to="/">Back</Link>
    </div>
  )
}

export default NoPage
