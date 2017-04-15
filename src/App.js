import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import { Provider } from 'react-redux';
import Home from './component/home/home';
import About from './component/about/about';
// 初始store值
const STATE_FROM_SERVER = {
  init: 'true'
}
const todoApp = (state, action) => {
  switch (action.type) {
    case 'test':
      return state = {
        ...state,
        test: action.data
      };
    default:
      return state;
  }
}
let store = createStore(todoApp, STATE_FROM_SERVER, applyMiddleware(logger));
console.log(store.getState());
store.dispatch({type: 'test', data: 'test passed!!'});

// 初始化导航栏
const navlist = ['Home', 'about', 'me'];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>Welcome to React</p>
        </div>
        {/*在这里注入导航*/}
        <Provider store={store}>
          <Router>
            <div>
              <div className='navbar'>
                <NavLink to="/" exact activeClassName="selected">Home</NavLink>
                <NavLink to="/about" activeClassName="selected">About</NavLink>
                <NavLink to="/topics" activeClassName="selected">Topics</NavLink>
              </div>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
