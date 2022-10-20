import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import ListItem from '../listItem/ListItem'
import './List.scss'

const List = () => {

  const [slider, setSlider] = useState(false)
  const [isMoved, setIsMoved] = useState(0)
  const listRef = useRef()

  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50
  //  if(slider!=0){ setIsMoved(true)};
  setIsMoved(true);
    if (direction === 'left' && slider > 0) {
      setSlider(slider - 1);
      listRef.current.style.transform = `translateX(${250 + distance}px)`
    }
    if (direction === 'right' && slider < 7) {
      setSlider(slider + 1)
      listRef.current.style.transform = `translateX(${-250 + distance}px)`
    }
  }
  console.log(slider)
  return (
    <div className='list'>
      <span className='listTitle'>Continue to Watch</span>
      <div className="wrapper">
        <FontAwesomeIcon
          icon={faChevronLeft}
          style={{
            cursor: 'pointer',
            display: !isMoved && 'none'
          }}
          className="slider left"
          onClick={() => { handleClick('left') }}
        />
        <div className="listContainer" ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
          <ListItem index={10} />
          <ListItem index={11} />
        </div>
        <FontAwesomeIcon
          icon={faChevronRight}
          style={{ cursor: 'pointer' }}
          className="slider right"
          onClick={() => { handleClick('right') }}
        />
      </div>
    </div>
  )
}

export default List;
