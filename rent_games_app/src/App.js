import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GameList from './components/GameList';
import GameListHeading from './components/GameListHeading';
import SearchBox from './components/SearchBox';


const App = () => {
	const [games, setGames] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getGameRequest = async () => {
    const url = `http://www.giantbomb.com/api/search/?api_key=726ff8f6ddeb814e09e4b8cb2293a694f7415b5a&format=json&query=vice city`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setGames(responseJson.Search);
    }
  };

  useEffect(() => {
    getGameRequest(searchValue);
  }, [searchValue]);

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