import React, { useEffect, useState } from 'react'
import { Link } from  'react-router-dom'
import MovieCard from '../components/MovieCard';

export default function MoiveListPage() {
  const [MovieList, setMovieList] = useState([])
  const [category, setCategory] = useState('전체');
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = ['전체', 'SF', '드라마', '액션', '로맨스', '범죄']

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}movieData.json`)
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data)
      })
  }, [])
  //console.log(MovieList)

  let result = MovieList.filter((item) => {
    const sameCategory =
      category === '전체' || item.genre == category
    return sameCategory
  })

  return (
    <section className="sec-movieList">
      <div className="hero">
        <div className="title-box">
          <h2>지금, 볼만한 영화</h2>
          <p className='sub-title'>다양한 장르와 작품 속에서, 당신의 취향에 맞는 영화를 찾아보세요.</p>
        </div>
      </div>
      <div className="inner">
        <div className="category-box">
          <div className="category-button">
            {
              categories.map((item, i) => (
                <button
                  type='button'
                  key={i}
                  className={category === item ? 'active' : ''}
                  onClick={() => setCategory(item)}
                >{item}</button>
              ))
            }
          </div>

          {/* 카드리스트 */}
          <div className="card-list">
            {
              result.map((item) => (
                <div key={item.id}>
                  <MovieCard

                    item={item}
                    onClick={() => setSelectedItem(item)}
                  />
                  <Link to={`/detail/${item.id}`}
                    className='btn-detail'>상세 보기</Link>
                </div>
              ))

            }
          </div>
        </div>
      </div>
    </section >
  )
}
