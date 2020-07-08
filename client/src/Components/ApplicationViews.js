import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PostList from "./PostList";
import { Form } from "./Form";
import Login from "./Login";
import Register from "./Register";
import { UserProfileContext } from '../Providers/UserProfileProvider.js';

const ApplicationViews = () => {

    const { isLoggedIn } = useContext(UserProfileContext);
    return (
        <Switch>
            <Route path="/" exact>
                {isLoggedIn ? <PostList /> : <Redirect to="/login" />}
            </Route>

            <Route path="/posts/add">
                {isLoggedIn ? <Form /> : <Redirect to="/login" />}
            </Route>

            <Route path="/posts/:id">{/* TODO: Post Details Component */}</Route>

            <Route path="/login">
                <Login />
            </Route>

            <Route path="/register">
                <Register />
            </Route>

        </Switch>
    );
};

export default ApplicationViews;