import React from "react";
import s from "./ProfileInfo.module.css";
import {Preloader} from "../../common/Preloader/Preloader";

export const ProfileInfo = (props: any) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.profileInfo}>
            <div>
                <img className={s.profileMainImg}
                     alt={""}
                     src={"https://avatars.mds.yandex.net/i?id=0b539fa0b4966504fd262589ba91f5f6-4571049-images-thumbs&n=13"}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt={'No User photo -'}/>
                ava + description
            </div>
        </div>
    )
}