import React from 'react';

class App extends React.Component {

	render() {
		return (
		  <div>
		    <h1>Fantastic Beast and Where To Find Them</h1>
		    <form>
		      <p>Search for beast by name</p>
		      <input type="text" />
		      <input type="submit" value="Submit"/>
		    </form>
		    <form>
		      <p>Search for beast by classification</p>
		      <input type="text"/>
		      <input type="submit" value="Submit"/>
		    </form>
		    <form>
		      <p>Search for beast by location</p>
		      <input type="text"/>
		      <input type="submit" value="Submit"/>
		    </form>
		  </div>
		)
	}
}

export default App;
