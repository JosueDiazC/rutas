import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

export default function Layout() {

  const navigate = useNavigate()

  return (
    <>
      {/* <div className='header' style={{display: 'flex', flexDirection: 'row', gap:"20px"}} >
        <Link to='/' >Home</Link>
        <Link to='/test' >Test</Link>
        <Link to='test' >Test</Link>
        <Link to='/team/details' >Team details</Link>
      </div> */}
      <div className='main'  >
        <Outlet />
      </div>
      {/* <footer >
        <button onClick={() => navigate('/')}>
          HOME
        </button>
        <button onClick={() => navigate('/test')}>
          TEST
        </button>
        <button onClick={() => navigate('login')}>
          TEAM DETAILS
        </button>
      </footer> */}
    </>
  )
}
