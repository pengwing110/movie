import React from 'react'
import { Star, Timer } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function MovieCard({ item, onClick }) {
  const navigate = useNavigate();
  return (
    <li className='card' onClick={onClick} style={{ cursor: 'pointer' }}>
      <figure>
        <img src={`${import.meta.env.BASE_URL}${item.image}`} alt={item.title} />
      </figure>
      <div className="card-content">
        <span className='badge'>{item.genre}</span>
        <h3>{item.title}</h3>
        <p>{item.year} 개봉 </p>
        <p className="desc">{item.desc}</p>
        <div className="keywords">
          <span><Star /> {item.rating}</span>
          <span><Timer /> {item.runtime}분</span>
        </div>
      </div>
    </li>
  )
}
