import React from 'react'
import '../css/movieList.css'
import { Link, useParams } from 'react-router-dom'
import { Star, Timer } from 'lucide-react';
import movieData from '../data/movieData';

export default function MovieDetailPage() {
  const { id } = useParams()
  const movies = movieData.find((item) => item.id === Number(id))

  if (!movies) {
    return (
      <h2>영화 정보를 찾을 수 없습니다.</h2>
    )
  }

  return (
    <section className='sec-detail'>
      <div className="inner">
        <img src={movies.image} alt={movies.title} />
        <div className="text-wrap">
          <p className="category">{movies.genre}</p>
          <h2 className='title'>
            {movies.title} | 
          </h2>
          <p className='director'><span>감독</span> {movies.director}</p>
          <p className='year'>{movies.year} 개봉</p>
          <p className='more'>{movies.more}</p>
          <div className="keywords">
            <span><Star /> {movies.rating}</span>
            <span><Timer /> {movies.runtime}분</span>
          </div>
          <Link to='/list'>목록으로 가기</Link>
        </div>
      </div>
    </section>
  )
}
