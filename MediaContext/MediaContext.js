import axios from "axios";
import {createContext} from "react";
import { useEffect , useState } from 'react';

export const MediaContext= createContext(null);

export function MediaContextProvider(props) 
{

    const [AllMovies, setAllMovies]=useState([]);
    const [AllTv , setAllTv]=useState([]);
    const[AllPeople , setAllPeople]=useState([]);

    async function getTrendingItems(mediaType , callBack) 
    {
        const KEY ='6e33b262d3145bed86171faad028b3ad';

        let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=${KEY}`);
          callBack(data.results);
        
    }

    useEffect(() => 
    {
        getTrendingItems('movie',setAllMovies);
        getTrendingItems('tv',setAllTv);
        getTrendingItems('person',setAllPeople);
       
    },[])
    
    
return (<>
         <MediaContext.Provider value={{AllMovies , AllTv , AllPeople}}>
                {props.children}
        </MediaContext.Provider>
    
    </>) 

            
        
    
    
}