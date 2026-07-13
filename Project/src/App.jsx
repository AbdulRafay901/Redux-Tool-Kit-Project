import React from 'react'
import {fetchPhotos, fetchVideos}  from './api/mediaApi'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import './App.css'
import ResultGrid from './components/ResultGrid'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import CollectionPage from './pages/CollectionPage'


const App = () => {
  return (
    <div>
         <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/collection' element={<CollectionPage />} />
         </Routes>
    </div>
  )
}

export default App