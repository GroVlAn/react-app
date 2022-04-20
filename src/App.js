import React, { Component } from 'react';
import { LeftPanel } from './containers/leftPanel/LeftPanel';

import '../styles/App.scss';

class App extends Component {
	render() {
		return (
			<div className='main_container'>
				<LeftPanel></LeftPanel>
				<div className='header'>2</div>
				<div className='content'>3</div>
			</div>
		);
	}
}

export default App;
