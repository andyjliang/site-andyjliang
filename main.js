import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import reducers from './reducers';
import axios from 'axios';

axios.get('/api/blog')
	.then(
		(res) => {
			var posts = { posts: res.data }
			const store = createStore(reducers, posts);

			ReactDOM.render(
				<Router history={createBrowserHistory()}>
					<Provider store={store}>
						<App />
					</Provider>
				</Router>, 
				document.getElementById('root')
			);

		}
	);
				