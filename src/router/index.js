import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import React from 'react';
import Welcome from '../ components/Welcome/Welcome';

const NoMatch = () => (
    <div style={{marginTop: '5rem'}}>no match found.</div>
);

const Path = () => {
    return(
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Welcome />
                </Route>
                <Route path='*'>
                    <NoMatch />
                </Route>
            </Switch>
        </Router>
    )
}

export default Path;