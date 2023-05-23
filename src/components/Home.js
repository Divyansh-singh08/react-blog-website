import { db } from '../firebase';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';

function Home(props) {
  //get the post from the firestore
  const [posts, setPosts] = useState([]);
  //   function fetchedPosts() {}
  //to get the post form firestore logic
  //we use useEffect hooks to make the call
  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, 'posts'));
      const fetchedPost = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
        // console.log(`${doc.id} => ${doc.data()}`);
      });
      setPosts(fetchedPost);
    };
    fetchPosts();
  }, []);

  return (
    <div className="home">
      <h1
        style={{
          color: 'green',
          display: 'inline-block',
          fontFamily: 'cursive',
        }}
      >
        Tech Blog
      </h1>
      <div id="blog-by">Blog-Lists</div>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <Link to={`/post/${post.id}`}>
            <h3 className="post-title">{post.title}</h3>
          </Link>
          <p>{post.subtitle}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
