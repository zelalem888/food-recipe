import './App.css';
import Navar from './navbar';
import Middle from './middle';
import Navgation from './navigation';
import Footer from './footer';
import React, { useState } from 'react';


function App() {
  const [search, setSearch] = useState('');
  return (
    <div>
    <Navar search={search} setSearch={setSearch}/>
    <Middle search={search}/>
    <Navgation />
    <Footer />
    </div>
  );
}

export default App;
