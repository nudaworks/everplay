import React from 'react';
import ReactDOM from 'react-dom';

class Game extends React.Component {
	render() {
		return <canvas data-game={this.props.name}></canvas>;
	}
}

ReactDOM.render(
	<Game name="breakout"/>,
	document.querySelector('.root')
);
