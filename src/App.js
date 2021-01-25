import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './sass/App.sass';

import musicUrl from './audio/1.mp3';

import Dashboard from './pages/Dashboard';
import Another from './pages/Another';
import Player from './components/Player';

function App() {
    return (
        <div className="App">
            <Player url={musicUrl} type="audio/mpeg" />
            <Router>
                <Switch>
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route path="/another" component={Another} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
