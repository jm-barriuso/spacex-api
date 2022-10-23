import logo from './logo.svg';
import './App.css';
import Launches from './views/Launches';
import LaunchDetails from './views/LaunchDetails';
import {BrowserRouter,Routes, Route,Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
      
      
      <Link to='/'><button>Home</button></Link>
      <Routes>
        <Route path='/' element={<Launches></Launches>}/>
        <Route path='/:id' element={<LaunchDetails></LaunchDetails>}/>
      </Routes>
    </div>
  );
}

export default App;
