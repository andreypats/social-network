import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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
    isAuth: boolean
}

export type mapDispatchPropsType = {
    // описываем, что возвращает MapDispatchToProps
    getUserProfile: (userId: number) => void
}

type PathParamsType = {
    profileId: number
}

type ParamsPropsType = {
    param: PathParamsType
}

type ProfileContainerPropsType = mapDispatchPropsType & MapStatePropsType & ParamsPropsType & {isAuth: boolean}

class ProfileContainer extends React.Component<ProfileContainerPropsType>{

    componentDidMount() {
        let profileId = this.props.param.profileId;
        if(!profileId) {
            profileId = 26623;
        }
        this.props.getUserProfile(profileId)
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect (ProfileContainer);

let mapStateToProps = (state: any): any => ({
    profile: state.profilePage.profile,
})

const TakeParams = (props: any) => {
    return <AuthRedirectComponent {...props} param={useParams()} />
}

export default connect(mapStateToProps, {getUserProfile})(TakeParams);

// export default compose(
//     connect(mapStateToProps, {getUserProfile}),
//     withRouter,
//     withAuthRedirect
// )(ProfileContainer);

