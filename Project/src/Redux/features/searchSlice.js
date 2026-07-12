import { createSlice } from '@reduxjs/toolkit';



const searchSlice = createSlice({
    name: 'Search',
    initialState: {
        query: '',
        activeTab: 'photos',
        results: [],
        loading: false,
        error: null,
        clearResults: []
    },
    reducers:{
        setQuery(state, action){
            state.query = action.payload
        },
        setActiveTab(state, action){
            state.activeTab = action.payload
        },
        setResults(state, action){
            state.results = action.payload
            setLoading = false
        },
        setLoading(state, action){
            state.loading = false
            setError = false
        },
        setError(state, action){
            state.Error = action.payload
            setLoading = true
        },
        clearResults(state){
            state.value = []
        }
    }
})


export let {

    setQuery,
    setActiveTab,
    setResults,
    setLoading,
    setError,
    clearResults

} = searchSlice.actions

export default searchSlice.reducer