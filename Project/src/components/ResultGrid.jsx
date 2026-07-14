import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchPhotos, { fetchVideos } from '../api/mediaApi'
import { useEffect } from 'react'
import { setError, setResults, setLoading} from '../Redux/features/searchSlice'
import ResultCard from './ResultCard'

const ResultGrid = () => {

    const {query, activeTab, results, loading, error} = useSelector((store) => store.search)

    const dispatch = useDispatch();
    useEffect(() => {

    const getData = async () => {

        try {
        
        let data = [];

        if(activeTab === 'photos'){
            let response = await fetchPhotos();

            data = response.map((item) => ({
                  id: item.id,
                  type: 'photo',
                  title: item.alt_description,
                  thumbnail: item.urls.small,
                  src: item.urls.full,
                  a: item.links.html
            }));
        }

        if(activeTab === 'videos'){
            let response = await fetchVideos('dogs');

            data = response.map((item) => ({
                  id: item.id,
                  type: 'video',
                  title: item.user.name || 'video',
                  thumbnail: item.image,
                  src: item.video_files[0].link
            }));
        }

        dispatch(setResults(data))
        

        } catch (error) {
            dispatch(setError(error))
        }
    
    }

    getData()

     }, [query, activeTab])

     if(error) return <h1>Error</h1>
     if(loading) return <h1>Loading...</h1>

  return (
    <div className='main'>
          {results.map((item, idx) => (
               <div key={idx} className='card'>
                     <ResultCard key={idx} item={item} btnText='Save'/>
               </div>
          ))}
    </div>
  )
}

export default ResultGrid