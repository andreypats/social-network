import {useMatch} from "react-router-dom";
import React from "react";

export const withRouter = (Component: any) =>{
    let RouterComponent = (props: any) => {
        const match = useMatch('/profile/:userId/');
        return <Component {...props} match={match}/>;
    }
    return RouterComponent;
}
