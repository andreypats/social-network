import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

export type ContactsPropsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ProfilePropsType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsPropsType
}

type MapStatePropsType = {
    // описываем, что возвращает MapStateToProps
    profile: ProfilePropsType,

}

class ProfileContainer extends React.Component<any, any>{

    componentDidMount() {
        let profileId = this.props.router.params.profileId;
        // if(!profileId) {
        //     profileId = 26384;
        // }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + profileId)
            .then(response => {
                this.props.setUserProfile(response.data)
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: any): MapStatePropsType => ({
    profile: state.profilePage.profile,
})

function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));

//let WithUrlDataContainerComponent = withRouter(ProfileContainer);

//export default connect (mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent)
