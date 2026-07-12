import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchPhotos, { fetchVideos } from '../api/mediaApi'
import { useEffect } from 'react'
import { setError, setResults, setLoading} from '../Redux/features/searchSlice'


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
                  src: item.urls.full
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
    <div style={{color:'white'}}>
          {results.map((item, idx) => (
              <div key={idx}>
                   <h1>{item.title}</h1>
              </div>
          ))}
    </div>
  )
}

export default ResultGrid