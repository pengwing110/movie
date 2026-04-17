import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom'

import 'swiper/css';
import 'swiper/css/pagination';
import '../css/hero.css'

export default function Hero() {
  return (
    <section id='hero'>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mainBanner"
      >
        <SwiperSlide className="slide1">
          <div className="hero-text">
            <h2>Lights On, Stories Begin</h2>
            <h4>영화의 감성을 담다</h4>
            <p>
              클래식 명작부터 최신 개봉작까지
              당신만의 취향에 맞는 영화를 탐험해보세요.
            </p>
          </div>
          <Link to='/list'>영화 목록 보러 가기</Link>
        </SwiperSlide>
        <SwiperSlide className="slide2">
          <div className="hero-text">
            <h2>Find Your Next Movie</h2>
            <h4>오늘의 영화는?</h4>
            <p>
              장르별 추천과 다양한 작품 정보를 통해
              지금 보고 싶은 영화를 쉽게 찾아보세요.
            </p>
          </div>
          <Link to='/list'>영화 목록 보러 가기</Link>
        </SwiperSlide>
        <SwiperSlide className="slide3">
          <div className="hero-text">
            <h2>Where Cinema Lives</h2>
            <h4>스크린 너머의 이야기</h4>
            <p>
              영화의 줄거리부터 평점, 숨겨진 이야기까지
              깊이 있는 영화 정보를 한눈에 만나보세요.
            </p>
          </div>
          <Link to='/list'>영화 목록 보러 가기</Link>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
