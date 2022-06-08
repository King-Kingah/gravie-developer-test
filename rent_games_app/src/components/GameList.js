import React from 'react';

const GameList = (props) => {
	return (
		<>
			{props.games.map((game, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={game.Thumbnail} alt='game'></img>
                    <div className='overlay d-flex align-items-center justify-content-center'>
						Add to Cart
                    </div>
				</div>
			))}
		</>
	);
};

export default GameList;