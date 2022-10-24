import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {StateType} from "../../redux/store";

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
    photos: {large: string}
}

export type MapStatePropsType = {
    // описываем, что возвращает MapStateToProps
    profile: ProfilePropsType | null,

}

export type mapDispatchPropsType = {
    // описываем, что возвращает MapDispatchToProps
    setUserProfile: (profile: ProfilePropsType) => void
}

type PathParamsType = {
    profileId: string
}

type ParamsPropsType = {
    param: PathParamsType
}

type ProfileContainerPropsType = mapDispatchPropsType & MapStatePropsType & ParamsPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType>{

    componentDidMount() {
        let profileId = this.props.param.profileId;
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

let mapStateToProps = (state: StateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
})

const TakeParams = (props: any) => {
    return <ProfileContainer {...props} param={useParams()} />
}

export default connect(mapStateToProps, {setUserProfile})(TakeParams);

// function withRouter(Component: any) {
//     function ComponentWithRouterProp(props: any) {
//         let location = useLocation();
//         let navigate = useNavigate();
//         let params = useParams();
//         return (
//             <Component
//                 {...props}
//                 router={{ location, navigate, params }}
//             />
//         );
//     }
//
//     return ComponentWithRouterProp;
// }
//
// export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));

//let WithUrlDataContainerComponent = withRouter(ProfileContainer);
//
//export default connect (mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent)
