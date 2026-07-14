import React from 'react'
import { addtoCollection, addtoToast, removeItem } from '../Redux/features/collectionSlice'
import { useDispatch } from 'react-redux'

const ResultCard = ({item, btnText}) => {

  const dispatch = useDispatch()

  const collection = (item) => {

      dispatch(addtoCollection(item))

      dispatch(addtoToast())

  }

  const remove = (item) => {
       dispatch(removeItem(item))
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
                      {btnText == 'Save' ? <button onClick={() => {
                          collection(item)
                      }}>{btnText}</button> : <button onClick={() => {
                          remove(item)
                      }}>{btnText}</button>}
                </div>
          </div>
    </div>
  )
}

export default ResultCard