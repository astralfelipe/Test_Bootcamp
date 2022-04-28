import React, { useState } from 'react';

import CardList from './components/CardList';
import SearchBar from './components/SearchBar';

import ProductSource from './api/ProductSource';


function App() {

  const [state, setState] = useState({
    results: []
  });

  const onSearch = async (text) => {
    const results = await ProductSource.get("/", {
      params: {q: text}})

    setState(prevState => {
      return {...prevState, results:results}
  })
}
  


  return (
    <div className="App">
      <div className="container searchApp">
        <h2 className="title is-2 has-text-centered">
          React search with API and hooks
        </h2>
        <SearchBar onSearch={onSearch}/>
        <CardList results={state.results}/>
      </div>
    </div>
  );
}

export default App;
