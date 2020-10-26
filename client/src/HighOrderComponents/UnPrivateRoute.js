import React, {useContext} from 'react';
import {Route , Redirect} from 'react-router-dom';
import {AuthContext} from "./../context/AuthContext";

const UnPrivateRoute = ({component : Component, ...rest}) => {
    const {isAuthenticated} = useContext(AuthContext);
    return (
        <Route {...rest} render = {props => {
            if (isAuthenticated) {
                return <Redirect to={{pathname : "/landing", state : {from : "/"}}}/>
            }
            else {
                return <Component {...props}/>
            }
        }}/>
    )
}

export default UnPrivateRoute;