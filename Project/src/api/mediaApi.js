import axios from 'axios';


export async function fetchPhotos($category){

    const apikey = import.meta.env.VITE_UNSPLASH_KEY;

    const res = await axios.get("https://api.unsplash.com/photos/",{
        param: {$category},
        headers:{Authorization: `Client-ID ${apikey}`}
    })

    return res.data
}

export default fetchPhotos


export async function fetchVideos(queryText){

    const apikey = import.meta.env.VITE_PEXELS_KEY;

    const res = await axios.get("",{
        headers:{Authorization: apikey},
        params: {
            query: queryText,
            per_page: 5
        }
    })

    return res.data.videos
}

