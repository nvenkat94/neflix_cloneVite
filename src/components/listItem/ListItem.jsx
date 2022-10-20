import React,{useState} from 'react'
import './listItem.scss'
import flim from '../../assets/flim.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faList, faPlay } from '@fortawesome/free-solid-svg-icons'


const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const trailer =  "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <div className='listItem'
      style={{ left: isHovered && index * 245 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={flim} alt="flim" />
     {isHovered&& (
      <>
      <video src={trailer} autoPlay={true} loop />
      <div className="itemInfo">
        <div className="icons">
          
          <FontAwesomeIcon
            icon={faHeart}
            style={{ cursor: 'pointer' }}
            className="icon"
          />
          <FontAwesomeIcon
            icon={faPlay}
            style={{ cursor: 'pointer' }}
            className="icon"
          />
          <FontAwesomeIcon
            icon={faList}
            style={{ cursor: 'pointer' }}
            className="icon"
          />
          <FontAwesomeIcon
            icon={faThumbsUp}
            style={{ cursor: 'pointer' }}
            className="icon"
          />
          <FontAwesomeIcon
            icon={faThumbsDown}
            style={{ cursor: 'pointer' }}
            className="icon"
          />
        </div>
        <div className="itemInfoTop">
          <span className='itemTitle'>Title</span>
          <span className='duration'>1hr 21min</span>
          <span className="ageLimit">12+</span>
          <div className="view">1002 Views</div>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, minus earum corporis veniam explicabo facilis.
        </div>
        <div className="genre">Genre: Drama</div>
      </div>
      </>)}
    </div>
  )
}


export default ListItem;