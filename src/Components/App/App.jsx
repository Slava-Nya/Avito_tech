import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Property from '../Property';
import Page from '../Page';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class App extends Component {
    render () {
        return (
            <Router>
                <div className="App">
                    <Route path="/" component={Property} exact />
                    <Route
                    path="/:id"
                    render={({ match }) => {
                        return <Page id={match.params.id} />;
                    }}
                    />
                </div>
            </Router>
        );
    }
}

export default App; 