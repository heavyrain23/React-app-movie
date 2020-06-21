import React, {useState, useEffect } from 'react';
import HeroImage from './elements/HeroImage'
import SearchBar from './elements/SearchBar'
import Grid from './elements/Grid'
import MovieThumb from './elements/MovieThumb'
import LoadMoreBtn from './elements/LoadMoreBtn'
import Spinner from './elements/Spinner'

import { useHomeFetch} from './hooks/useHomeFetch'

const Home = () => {

    const [{ state, loading, error}, fetchMovies] = useHomeFetch();
    console.log(state);

return (
    <>
        <HeroImage/>
        <SearchBar/>
        <Grid/>
        <MovieThumb/>
        <Spinner/>
        <LoadMoreBtn/>

    </>

    )
}



export default Home