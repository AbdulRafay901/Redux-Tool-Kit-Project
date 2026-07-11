import React from 'react'
import {fetchImages, fetchVideos}  from './api/mediaApi'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import './App.css'

const App = () => {
  return (
    <div>
       <SearchBar />
       <Tabs />
    </div>
  )
}

export default App