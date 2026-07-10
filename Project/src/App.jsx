import React from 'react'
import {fetchImages, fetchVideos}  from './api/mediaApi'

const App = () => {
  return (
    <div>
          <button onClick={(() => {
                fetchImages("cat")
             })}>images
          </button>

          <button onClick={(() => {
                fetchVideos('nature')
             })}>Videos
          </button>
    </div>
  )
}

export default App