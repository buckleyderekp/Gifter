import React, { useContext, useRef } from 'react';
import { PostContext } from '../Providers/PostProvider.js';
import { useHistory } from "react-router-dom";




export const Form = () => {

    const { addPost } = useContext(PostContext)
    const title = useRef()
    const url = useRef()
    const caption = useRef()
    const history = useHistory();

    const addNewPost = () => {
        const newPost = {
            title: title.current.value,
            imageUrl: url.current.value,
            caption: caption.current.value,
            dateCreated: new Date(),
            userProfileId: 1
        }
        addPost(newPost).then((p) => {
            // Navigate the user back to the home route
            history.push("/");
        });
    }

    return (
        <div class="main">
            <header>
                <h2>Enter Post</h2>
            </header>
            <form action="" class="form">

                <fieldset class="fieldsets">
                    <label for="title" class="title">Title:</label>
                    <input type="text" name="title" id="title" class="title" ref={title} />
                </fieldset>
                <fieldset class="fieldsets">
                    <label for="url" class="url">URL:</label>
                    <input type="text" name="url" id="url" class="url" ref={url} />
                </fieldset>
                <fieldset class="fieldsets">
                    <label for="caption" class="caption">Caption:</label>
                    <input type="caption" name="caption" id="caption" class="caption" ref={caption} />
                </fieldset>
            </form>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault()
                        addNewPost()
                    }
                }
                className="button">
                Save
            </button>
        </div>
    )
}


