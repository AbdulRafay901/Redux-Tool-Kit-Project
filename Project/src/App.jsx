import React from 'react'
import {fetchPhotos, fetchVideos}  from './api/mediaApi'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import './App.css'
import ResultGrid from './components/ResultGrid'

const App = () => {
  return (
    <div>
       <SearchBar />
       <Tabs />
       <ResultGrid />
    </div>
  )
}

export default App