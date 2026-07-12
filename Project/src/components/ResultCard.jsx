import React from 'react'

const ResultCard = ({item}) => {

  const collection = (item) => {

      const oldData = JSON.parse(localStorage.getItem('collection')) || []

      const newData = [...oldData,item];

      localStorage.setItem('collection', JSON.stringify(newData));

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