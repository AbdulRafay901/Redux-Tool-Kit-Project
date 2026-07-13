import React from 'react'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultCard from '../components/ResultCard'
import ResultGrid from '../components/ResultGrid'
 import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
  return (
    <div>
         <SearchBar />
         <Tabs />
         <ResultGrid />
         <ToastContainer />
    </div>
  )
}

export default Home