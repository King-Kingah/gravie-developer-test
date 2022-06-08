import React from 'react';

const MovieList = (props) => {
	return (
		<>
			{props.games.map((game, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={game.Thumbnail} alt='game'></img>
				</div>
			))}
		</>
	);
};

export default GameList;