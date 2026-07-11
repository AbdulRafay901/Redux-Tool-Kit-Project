import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../Redux/features/searchSlice';

const Tabs = () => {

    const tabs = ['photos', 'videos'];

    const dispatch = useDispatch()

    const activeTab = useSelector((state) => state.search.activeTab)

  return (
    <div className='tabs'>
        {tabs.map((elem,idx) => (
             <button key={idx} onClick={() => {
                 dispatch(setActiveTab(elem))
             }}>{elem}</button>
        ))}
    </div>
  )
}

export default Tabs