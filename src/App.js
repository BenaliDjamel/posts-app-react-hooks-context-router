import React from 'react';
import Navbar from './components/Navbar'
import PostContextProvider from './contexts/PostContextProvider';
import Posts from './components/Posts'
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreatePost from './components/CreatePost'
import SinglePost from './components/SinglePost';
import About from './components/About';



function App() {
  return (
    <Router>
      <div className="App container">
        <Navbar />
        <PostContextProvider>

          <Route exact path="/" component={Posts} />
          <Route exact path="/create" component={CreatePost} />
          <Route exact path="/post/:id" component={SinglePost} />
          <Route exact path="/about" component={About} />
        </PostContextProvider>

      </div>
    </Router>
  );
}

export default App;
