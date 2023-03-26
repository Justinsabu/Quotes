import './App.css';
import React from 'react'
import Header from './components/Header';
// import Viewquotes from './components/Viewquotes';
// import Searchquotes from './components/Searchquotes';
// import Random from './components/Random';
import { Route,Routes } from 'react-router-dom';
import Bookmark from './components/Bookmark';
import Home from './components/Home';




function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      {/* <Viewquotes/>
      <Searchquotes/>
    <Random/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bookmark' element={<Bookmark/>}/>
      </Routes>
      </header>
    </div>
  );
}

export default App;
