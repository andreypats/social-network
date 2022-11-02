import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
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
    getUserProfile: (userId: number) => void
}

type PathParamsType = {
    profileId: number
}

type ParamsPropsType = {
    param: PathParamsType
}

type ProfileContainerPropsType = mapDispatchPropsType & MapStatePropsType & ParamsPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType>{

    componentDidMount() {
        let profileId = this.props.param.profileId;
        if(!profileId) {
            profileId = 26384;
        }
        this.props.getUserProfile(profileId)
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

export default connect(mapStateToProps, {getUserProfile})(TakeParams);

