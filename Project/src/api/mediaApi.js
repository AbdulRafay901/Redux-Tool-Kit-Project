import axios from 'axios';


export async function fetchImages($category){

    const apikey = import.meta.env.VITE_UNSPLASH_KEY;

    const res = await axios.get("https://api.unsplash.com/photos/",{
        param: {$category},
        headers:{Authorization: `Client-ID ${apikey}`}
    })

    console.log(res.data)
}

export default fetchImages


export async function fetchVideos(queryText){

    const apikey = import.meta.env.VITE_PEXELS_KEY;

    const res = await axios.get("https://api.pexels.com/videos/search",{
        headers:{Authorization: apikey},
        params: {
            query: queryText,
            per_page: 5
        }
    })

    console.log(res.data)
}

