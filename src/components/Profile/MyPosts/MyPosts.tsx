import React from "react";
import s from './MyPosts.module.css'
import {PostType} from "../../../redux/store";
import {Post} from "./Post/Post";


type MyPostsType = {
    newPostText: string | undefined
    updateNewPostText: (text: string | undefined) => void
    addPost: () => void
    posts: PostType[]
}

export const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map ((p: PostType) => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>{postsElements}</div>
        </div>
    )
}