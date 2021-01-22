import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './sass/App.sass';

import Dashboard from './pages/Dashboard';
import Another from './pages/Another';
import Player from './components/Player';

function App() {
    return (
        <div className="App">
            <Player></Player>
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
