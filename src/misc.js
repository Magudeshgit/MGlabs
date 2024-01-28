import React, { useState }  from "react";
import Header from "./Components/header"
import Search from "./Components/searchbar"
import Card from "./Components/card"
import { useEffect } from "react";
let rdata;
const kj = {
    Poster
: 
"https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
Title
: 
"Italian Spiderman",
Type
: 
"movie",
Year
: 
"2007",
imdbID
: 
"tt2705436"
}
const url = "http://www.omdbapi.com/?apikey=a91b3dd6&s="

const App = ()=>{
    const [movies,setMovies] = useState([])
    const [loading, setLoading] = useState(false)

    async function searchOps(searchValue) {
        setLoading(true)
        let kl = url + searchValue
        console.log(kl)
        const response = await fetch(kl)
        let rawdata = await response.json()
        setMovies(rawdata.Search)
        console.log(rawdata)
        setLoading(false)
    }

    return (
        <div classnameName="parent">
            <Header/>
            <Search response={searchOps}/>
            {
                loading?
                (
                    <div class="flex items-center justify-center min-h-screen p-5 min-w-screen">
                    <div class="flex space-x-2 animate-pulse">
                        <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
                    </div>
                </div>
                )
                : <div></div>
            }
            <div classnameName="cardParent flex justify-center items-center max-w-full flex-wrap gap-10">
            {
                
                movies?.length > 0 ? movies.map((movie)=><Card data={movie}/>)
                : (
                    <div classnameName="bg-slate-100 w-full h-8 text-center">
                    <p classnameName="font-Mono text-xl font-medium">Search to Display Movies!</p>
                    </div>
                )

            }
            </div>
        </div>
    )
}
export default App

// {data.map(
//     (movie)=>{<Card data={movie[0]}/>; console.log(movie[0])}
//     )}