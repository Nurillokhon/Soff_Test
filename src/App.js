import './App.css';
import Navbar from './componets/Navbar';
import Main from './componets/Main';
import {Outlet} from 'react-router-dom'
function App() {
  return (
    <div >
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default App;
