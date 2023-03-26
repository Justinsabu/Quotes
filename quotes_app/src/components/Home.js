import React from 'react'
import './Home.css'
import Random from './Random'
import Searchquotes from './Searchquotes'
import Viewquotes from './Viewquotes'
import Loader from './Loader/Loader'
import { useSelector } from 'react-redux';



function Home() {

    const {loading} = useSelector(state => state.quoteReducer)
    console.log(loading);

    return (
        <div >
            <header className="text-center">
                { (loading) ? <Loader /> : <Viewquotes />  }
                <Searchquotes />
                <Random />
            </header>

        </div>
    )
}

export default Home




