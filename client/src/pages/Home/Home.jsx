import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Link to={'/login'}>
      <div>Go to Login</div>
    </Link>
  )
}

export default Home