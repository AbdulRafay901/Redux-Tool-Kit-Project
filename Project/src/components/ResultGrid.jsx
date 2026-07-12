import React from 'react'
import { useSelector } from 'react-redux'
import fetchPhotos, { fetchVideos } from '../api/mediaApi'
import { useEffect } from 'react'


const ResultGrid = () => {

    const {query, activeTab, results, loading, error} = useSelector((store) => store.search)


    useEffect(() => {

    const getData = async () => {

        let data

        if(activeTab === 'photos'){
            data = await fetchPhotos();
        }
        if(activeTab === 'videos'){
            data = await fetchVideos('dogs');
        }
        console.log(data)

    }

    getData()

     }, [query, activeTab])

  return (
    <div>
         
    </div>
  )
}

export default ResultGrid