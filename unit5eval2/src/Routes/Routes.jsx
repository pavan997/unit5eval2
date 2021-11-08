import React from 'react';
import {Route,Switch} from 'react-router-dom';
import HomePage from '../Components/HomePage/HomePage';
import SinglePage from '../Components/SinglePage/SinglePage';


function Routes() {
    return (
        <div>
            <Switch>
            <Route exact path="/"><HomePage/></Route>
            <Route exact path ="/list/:id"><SinglePage/></Route>
            </Switch>
            
            
        </div>
    )
}

export default Routes

