import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './app.sass';
import Home from './component/Home/Home'
import Stopwatch from './component/stopwatch/Stopwatch';

const App:React.FC = () => {
  return (
    <div className="App">
      <header className="App__header">
        <h1>Watch App</h1>
        <nav>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/stopwatch'}>Stopwatch</Link></li>
            <li>clock</li>
            <li>timer</li>
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
