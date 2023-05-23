
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

function PostDetails() {
  //we want post object content
  const [post, setPost] = useState({});
  const { postId } = useParams(); //this will give object

  //we get the post form the firebase using hooks
  useEffect(() => {
    const fetchPostDetails = async () => {
        const snapshot = await getDocs(collection(db, 'posts'));
        let postData; 
         snapshot.forEach((doc)=>{
          if(doc.id === postId){
            postData = doc.data();
          }
         });
        if (postData) {
          // const postData = defDoc.data();
          setPost(postData);
          console.log(postData);
        } else {
          console.log('Post not found');
        }
      
    };
    fetchPostDetails();
  }, [postId]);
  // useEffect(() => {
  //   db.collection('posts')
  //     .doc(postId)
  //     .get()
  //     .then((snapshot) => {
  //       // console.log("snapshot",snapshot.data());
  //       setPost(snapshot.data());
  //     });
  // }, [postId]);

  return (
    <div className="post-detail">
      <h1 >{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetails;
