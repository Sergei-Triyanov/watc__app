import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import './app.sass';
import Home from './component/Home/Home'
import Stopwatch from './component/stopwatch/Stopwatch';
import { useTypedSelector } from './hook/useTypedSelector';

const App:React.FC = () => {
  return (
    <div className="App">
      <header className="App__header">
        <h1>Watch App</h1>
        <nav>
          <ul>
            <li><NavLink exact={true} to={'/'} activeClassName="active__link">Home</NavLink></li>
            <li><NavLink exact={true} to={'/stopwatch'} activeClassName="active__link">Stopwatch</NavLink></li>
            <li><NavLink exact={true} to={'/clock'}>Clock</NavLink></li>  
            <li><NavLink exact={true} to={'/timer'}>Timer</NavLink></li>  
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path={'/'} component={Home}/>
        <Route exact path={'/stopwatch'} component={Stopwatch}/>
      </Switch>
    </div>
  );
}

export default App;
