import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state: any): any => ({
    isAuth: state.auth.isAuth
});

export let withAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any> {

        render () {
            if (!this.props.isAuth) return <Navigate to={'/login'} />

            return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect (mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}

