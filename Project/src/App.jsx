import React from 'react'
import {fetchImages, fetchVideos}  from './api/mediaApi'
import SearchBar from './components/SearchBar'
import './App.css'

const App = () => {
  return (
    <div>
       <SearchBar />
    </div>
  )
}

export default App