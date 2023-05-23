// The react-router-dom package
// contains bindings for using React Router in web applications.
import { Route,Routes } from 'react-router-dom';

//taking all components
import { Navbar, Home, CreatePost, PostDetails } from './';

//functional components.....

function App() {
  return (
    <div className="container">
      {/* here we have to create routes components */}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/post/:postId" element={<PostDetails/>} />
        <Route exact path="/create-post" element={<CreatePost/>} />
      </Routes>
    </div>
  );
}

export default App;
