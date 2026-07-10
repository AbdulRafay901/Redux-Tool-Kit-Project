import React from 'react'
import fetchImages from './api/mediaApi'

const App = () => {
  return (
    <div>
          <button onClick={fetchImages}>Topa Lola</button>
    </div>
  )
}

export default App