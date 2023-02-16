
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PostState from './context/post/PostState';


function App() {
  return (
      <>
        <PostState>
        <Navbar/>
        <Home/>
        </PostState>
      </>
  );
}

export default App;
