import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createStore, applyMiddleware, compose  } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../../redux/reducer';
import Navbar from '../Navbar/Navbar';
import News from '../../pages/News/News';
import './App.css';
import Main from '../../pages/Main/Main';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(),
);
const store = createStore(reducer, enhancer);

export default class App extends React.Component {

	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Navbar />
					<Switch>
						<Route exact path='/' component={Main} />
						<Route path='/news/' component={News} />
					</Switch>
				</BrowserRouter>
			</Provider>
		);
	}
}


