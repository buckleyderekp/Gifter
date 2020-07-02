import React from "react";
import "./App.css";
import { PostProvider } from "./Providers/PostProvider.js";
import PostList from "./Components/PostList.js";

function App() {
  return (
    <div className="App">
      <PostProvider>
        <PostList />
      </PostProvider>
    </div>
  );
}

export default App;