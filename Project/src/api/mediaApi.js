import axios from 'axios';

export async function fetchImages($category){

    const apikey = import.meta.env.VITE_UNSPLASH_KEY;

    console.log(apikey)




    const res = await axios.get("https://api.unsplash.com/photos/",{
        param: {$category},
        headers:{Authorization: `Client-ID ${apikey}`}
    })

    console.log(res.data)
}

export default fetchImages