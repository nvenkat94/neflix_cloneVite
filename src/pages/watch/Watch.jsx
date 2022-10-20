import React from 'react'
import './watch.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

export default function Watch() {
  return (
    <div className='watch'>
      <div className="back">
      <FontAwesomeIcon
            icon={faArrowLeftLong}
            style={{ cursor: 'pointer' }}
            className="icon"
          />Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4"
      />      
    </div>
  )
}
