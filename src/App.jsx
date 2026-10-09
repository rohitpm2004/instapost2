import React from 'react';
import Post from './components/post.jsx';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import './App.css';

function App() {
  return (
    <div className="posts">
      <h1>Mini Image Feed</h1>
      <Post image={image1} name="Gayathri" />
      <Post image={image2} name="Rahul" />
      <Post image={image3} name="Sneha" />
    </div>
  );
}

export default App;
