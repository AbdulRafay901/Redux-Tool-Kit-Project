import React from 'react'
import { addtoCollection } from '../Redux/features/collectionSlice'
import { useDispatch } from 'react-redux'

const ResultCard = ({item}) => {

  const dispatch = useDispatch()

  const collection = (item) => {

      dispatch(addtoCollection(item))

  }


  return (
    <div>
         
          {item.type == 'photo' ? <img src={item.src} alt=''/> : ''}
          {item.type == 'video' ? <video autoPlay loop src={item.src}></video> : ''}
          <div className="overlay">
                <div className="p-save">
                  <a href={item.a}>
                      <p>{item.title}</p>
                      </a>
                      <button onClick={() => {
                          collection(item)
                      }}>Save</button>
                </div>
          </div>
    </div>
  )
}

export default ResultCard