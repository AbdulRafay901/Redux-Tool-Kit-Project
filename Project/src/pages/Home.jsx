import React from 'react'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultCard from '../components/ResultCard'
import ResultGrid from '../components/ResultGrid'

const Home = () => {
  return (
    <div>
         <SearchBar />
         <Tabs />
         <ResultGrid />
    </div>
  )
}

export default Home