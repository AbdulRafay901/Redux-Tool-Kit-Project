import React from 'react'

const CollectionPage = () => {

    const collection = JSON.parse(localStorage.getItem('collection'))

  return (
    <div style={{color:'white'}}>
          {collection.map((item,idx) => (
               <div key={idx}>
                     
               </div>
          ))}
    </div>
  )
}

export default CollectionPage