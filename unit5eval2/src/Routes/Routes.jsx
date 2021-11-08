import React from 'react';
import {Route,swith} from 'react-router';
import SinglePage from '../Components/SinglePage/SinglePage';

function Routes() {
    return (
        <div>
            <Route path='/character/:id'>
                <SinglePage />
            </Route>
            
        </div>
    )
}

export default Routes
