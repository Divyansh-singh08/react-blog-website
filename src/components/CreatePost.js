import React from 'react';
// import { unstable_batchedUpdates } from 'react-dom';
//use firestore
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useFormInput } from '../hooks';

function CreatePost(props) {
  //use hooks
  //useState return array and first index and then go on...
  //   const [title, setTitle] = useState('');
  //   const [subtitle, setSubtitle] = useState('');
  //   const [content, setContent] = useState('');

  //using custom hooks here...

  const title = useFormInput('');
  const subtitle = useFormInput('');
  const content = useFormInput('');

  async function handleSubmit(e) {
    e.preventDefault(); //page don't get reloaded

    console.log(e.target);
    console.log('title', title);
    console.log('subtitle', subtitle);
    console.log('content', content);

    //CALLING firestore and making connection between them.....
    try {
      const docRef = await addDoc(collection(db, 'posts'), {
        title: title.value,
        subtitle: subtitle.value,
        content: content.value,
        createdAt: new Date(),
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  return (
    <div className="create-post">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          {/* <input value={title} onChange={(e) => setTitle(e.target.value)} /> */}
          <input {...title} />
        </div>

        <div className="form-field">
          <label>Subtitle</label>
          {/* <input
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          /> */}
          <input {...subtitle} />
        </div>

        <div className="form-field">
          <label>Content</label>
          {/* <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea> */}
          <textarea {...content}></textarea>
        </div>

        <button className="create-post-btn">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
