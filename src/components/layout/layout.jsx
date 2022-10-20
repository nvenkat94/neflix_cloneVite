import React from 'react'
import Featured from '../featured/Featured'
import Navbar from '../navbar/Navbar'
import List from '../list/List'
import './layout.scss'

const Layout = () => {
  return (
    <>
      <div className='layout'>
        <Navbar />
        <Featured type='movie'/>
        <List/>
        <List/>
      </div>
    </>

  )
}

export default Layout;
