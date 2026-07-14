import React from 'react'
import ResultCard from '../components/ResultCard'
import { useSelector } from 'react-redux'

const CollectionPage = () => {

    const collection = useSelector((state) => state.collection.items);

  return (
    <div style={{color:'white'}} className='main'>
          {collection.map((item,idx) => (
               <div key={idx} className='card'>
                   <ResultCard key={idx} item={item} btnText={'Remove'}/>
               </div>
          ))}
    </div>
  )
}

export default CollectionPage