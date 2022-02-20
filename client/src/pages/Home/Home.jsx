import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      navigate('/login', { replace: true });
    }
  },[])
  return (
    <Link to={'/login'}>
      <div>Go to Login</div>
    </Link>
  )
}

export default Home