import { Routes, Route, Outlet, Link } from "react-router-dom";
import Header from './components/Header';

import Watched from './components/Watched';
import Watchlist from './components/Watchlist';
import Add from './components/Add';


import './lib/font-awesome/css/all.min.css'


import './App.css';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Watchlist />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </>

  );
}

export default App;
