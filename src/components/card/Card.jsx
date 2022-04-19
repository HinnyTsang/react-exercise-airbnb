import React from 'react';
import './card.css';

const Card = ({
  key, title, description, price,
  coverImg, stats, location, openSpots }) => {

  let badgeText;

  if (openSpots == 0) {
    badgeText = "SOLD OUT";
  }
  else if (location == "Online") {
    badgeText = "ONLINE"
  }

  return (
    <div className='card'>
      {badgeText && <div className='card--badge'>{badgeText}</div>}
      <img src={coverImg} className='card--people'></img>
      <div className='card--score-row'>
        <img src='star.png' className='card--star'></img>
        <span>{stats.rating}</span>
        <span className='grey'>({stats.reviewCount}).</span>
        <span className='grey'>{location}</span>
      </div>
      <p>{title}</p>
      <p ><span className='bold'>From ${price}</span> / person</p>
    </div>
  )
}

export default Card