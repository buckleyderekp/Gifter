import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ApplicationViews from "./Components/ApplicationViews.js";
import { PostProvider } from "./Providers/PostProvider.js";
import Header from "./Components/Header.js";
import { UserProfileProvider } from "./Providers/UserProfileProvider.js";

function App() {
  return (
    <div className="App">
      <Router>
        <UserProfileProvider>
          <PostProvider>
            <Header />
            <ApplicationViews />
          </PostProvider>
        </UserProfileProvider>
      </Router>
    </div>
  );
}

export default App;