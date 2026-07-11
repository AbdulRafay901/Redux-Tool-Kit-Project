import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../Redux/features/searchSlice'


const SearchBar = () => {

  const [Text, setText] = useState('')

  const dispatch = useDispatch();

  function formHandler(e){
     e.preventDefault()

     dispatch(setQuery(Text))

     setText('')
      
  }


  return (
    <div>
         <form className='search-form' onSubmit={(e) => {
             formHandler(e)
         }}>
               <input
                   type='search'
                   placeholder='Search Something....'
                   value={Text}
                   onChange={(e) => {
                      setText(e.target.value)
                   }}
               >

               </input>
               <button type='submit'>Search</button>
         </form>
    </div>
  )
}

export default SearchBar