import React from 'react'
import ResultCard from '../components/ResultCard'

const CollectionPage = () => {

    const collection = JSON.parse(localStorage.getItem('collection'))

  return (
    <div style={{color:'white'}} className='main'>
          {collection.map((item,idx) => (
               <div key={idx} className='card'>
                   <ResultCard key={idx} item={item}/>
               </div>
          ))}
    </div>
  )
}

export default CollectionPage