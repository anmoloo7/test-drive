import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import screens from '../screens';
import { ScrollToTop } from "../components";

const Routes = () => (
    <Router>
        <ScrollToTop />
        <Switch>
            <Route path="/" component={screens.Home} />
        </Switch>
    </Router>
);

export default Routes;
