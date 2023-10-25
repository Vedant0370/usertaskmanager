import './App.css';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home'
import MyTask from './components/MyTask/MyTask';

function App() {
  return (
    <>
    
    <Router>
      <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/navbar' element={<Navbar/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/mytask' element={<MyTask/>}></Route>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
