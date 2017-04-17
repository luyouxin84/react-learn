import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {BrowserRouter as Router, Route, NavLink, Redirect, Switch} from 'react-router-dom'
import {Provider} from 'react-redux';
import Home from './component/home/home';
import About from './component/about/about';
import reducers from './action';

let store = createStore(reducers, applyMiddleware(logger));
store.dispatch({type: 'test', data: 'test passed!!'});

// 初始化导航栏
const navlist = ['Home', 'about', 'topics'];
const _nav = navlist.map((item) => <NavLink to={item} id={`${item}`} key={item} activeClassName='selected'>{item}</NavLink>)
const page404 = () => (
  <h1>Not found page!</h1>
)
class App extends Component {  
  componentDidMount(){
    //应该是写在子里边，激发action，然后调用如下方法。。。免费，不如用官方例子简单
    console.log(location.pathname);
    let b = location.pathname.match(/\/\w*/g);
    let c = b.toString().slice(1,)
    let o = document.getElementById(c);
    o.style.color = 'red';
  }
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
                 {_nav}
              </div>             
              <Switch>
                <Route path="/Home" exact component={Home}/>
                <Route path="/about" exact component={About}/> {/*<Route  path="/topics" exact component={topics}/>*/}
                <Redirect from='/' to='/Home'/>
                <Route component={page404}/>
              </Switch>
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
