import React from 'react';
import{ createContext , useContext} from 'react';
import {useState} from 'react';
import {MediaContext} from '../MediaContext/MediaContext';



export const  SearchContextItems = createContext([])
export  function SearchContext(props) 

{
let {AllMovies , AllTv , AllPeople}= useContext(MediaContext);

const [MovieSearch, setMovieSearch] = useState([]);
const [TvSearch, setTvSearch] = useState([]);
const [PersonSearch , setPersonSearch] = useState([]);


 function SearchItems(term) 
{

    let myMovieSearch = [...MovieSearch];
    let myTvSearch = [...TvSearch];
    let myPersonSearch = [...PersonSearch];

    myMovieSearch= AllMovies.filter((movie)=>movie.title.toLowerCase().includes(term.toLowerCase()))
    myTvSearch= AllTv.filter((tv)=>tv.name.toLowerCase().includes(term.toLowerCase()))
    myPersonSearch= AllPeople.filter((person)=>person.name.toLowerCase().includes(term.toLowerCase()))

    setMovieSearch(myMovieSearch)
    setTvSearch(myTvSearch)
    setPersonSearch(myPersonSearch);



}



  return (<>

    
    <SearchContextItems.Provider value={{MovieSearch,PersonSearch,TvSearch , SearchItems}}>
    
    {props.children}
    </SearchContextItems.Provider>
    </>
        )
}
 