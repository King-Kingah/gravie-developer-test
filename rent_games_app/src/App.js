import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GameList from './components/GameList';
import GameListHeading from './components/GameListHeading';
import SearchBox from './components/SearchBox';


const App = () => {
	const [games, setGames] = useState([]);

  const getGameRequest = async () => {
    const url = `http://www.omdbapi.com/?s=star wars&apikey=263d22d8`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setGames(responseJson.Search);
    }
  };

  useEffect(() => {
    getGameRequest(searchValue);
  }, []);

	return (
		<div className='container-fluid game-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
				<GameListHeading heading='Games' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
        <GameList games={games} />
			</div>
		</div>
	);
};

export default App;