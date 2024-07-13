import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import Footer from './components/Footer';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostList posts={posts} />} />
        <Route path="/category/:category" element={<PostList posts={posts} />} />
        <Route path="/post/:url" element={<PostDetail posts={posts} />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
