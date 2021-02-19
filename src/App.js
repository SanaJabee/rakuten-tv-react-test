import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import ListsView from './components/listsComponent';
import Movie from './components/moviesComponent';
import { Provider } from 'react-redux';
import store from '../store/store';
export default function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" component={ListsView} exact={true} />
                    <Route path="/movie/:id" component={Movie}  />
                </Switch>
            </Router>
        </Provider>
    )
}