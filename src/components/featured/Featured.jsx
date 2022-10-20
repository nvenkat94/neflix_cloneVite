import React from 'react'
import netflixBG from '../../assets/netflixBG.jpg'
import johnwick from '../../assets/johnwick.png'
import john from '../../assets/john.png'
import './feature.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
const Featured = ({ type }) => {
  return (
    <div className='feature'>
      {type &&
        (<div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>)
      }
      <img src={john} alt="BG_Netflix" />
      <div className="info">
        <img src={johnwick} alt="info" />
        <span className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium Quos minus accusantium quisquam molestiae?
        </span>
        <div className="buttons">
          <button className='play'>
            <FontAwesomeIcon
              icon={faPlayCircle}
              style={{ cursor: 'pointer' }}
              className="icon"
            />
            <span>Play</span>
          </button>
          <button className='more'>
            <FontAwesomeIcon
              icon={faCircleInfo}
              style={{ cursor: 'pointer' }}
              className="icon"
            /><span>Read More</span></button>
        </div>
      </div>
    </div>
  )
}

export default Featured