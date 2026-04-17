import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Homepage from './pages/Homepage';
import MovieDetailPage from './pages/MovieDetailPage';
import MovieListPage from './pages/MoiveListPage'

function App() {


  return (
    <>
     <main className="main">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/detail/:id' element={<MovieDetailPage />} />
        <Route path='/list' element={<MovieListPage />} />
      </Routes>

     </main>
    </>
  )
}

export default App
