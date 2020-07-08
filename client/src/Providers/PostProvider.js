import React, { useState, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider"

export const PostContext = React.createContext();

const getPost = (id) => {
    return fetch(`/api/post/${id}`).then((res) => res.json());
};

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([]);
    const { getToken } = useContext(UserProfileContext);

    const getAllPosts = () => {
        return getToken().then((token) =>
            fetch("api/post", {
                method: "Get",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then((res) => res.json())
                .then(setPosts))
    };

    const addPost = (post) => {
        getToken().then((token) =>
            fetch("api/post", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(post)
            }).then(resp => {
                if (resp.ok) {
                    return resp.json();
                }
                throw new Error("Unauthorized");
            }))
    };

    return (
        <PostContext.Provider value={{ posts, getAllPosts, addPost, getPost }}>
            {props.children}
        </PostContext.Provider>
    );
};