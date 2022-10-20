import React from 'react'
import './home.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faInbox } from "@fortawesome/free-solid-svg-icons";
// import Navbar from '../../components/navbar/Navbar';
// import Featured from '../../components/featured/Featured';
// import ListItem from '../../components/listItem/ListItem';
// import List from '../../components/list/List'
import {Featured,List,Navbar} from '../../components'
const Home = () => {
  return (
    <>
    <div className='home'>
      <Navbar />
      <Featured type='movie'/>
      <List/>
      <List/>
    </div>
  </>

    // <div className='home'>
    //   <Navbar  />
      
    //   Homed
    // </div>
  )
}


export default Home;