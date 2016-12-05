import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
	render() {
		return <h1>Fantastic Beasts and Where To Find Them</h1>
	}
}

render(<App/>, document.getElementById('app'));
