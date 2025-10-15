import { useEffect, useState } from "react";
import GenreList from './components/GenreList.jsx';
import Navbar from './components/Navbar.jsx';
import Tracklist from './components/Tracklist.jsx';

import { Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Tracklist />}/>
      </Routes>
    </>
  )
}
export default App;
