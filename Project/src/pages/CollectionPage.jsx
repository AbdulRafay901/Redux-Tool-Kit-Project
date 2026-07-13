import React from 'react'

const CollectionPage = () => {

    console.log(JSON.parse(localStorage.getItem('collection')))


  return (
    <div style={{color:'white'}}>
          <h1>Collection Page</h1>
    </div>
  )
}

export default CollectionPage