import { Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import Header from './Components/Header';
import Register from './Components/Register';
import Register2 from './Components/Register2';
import Login from './Components/Login'
import Home from './pages/Home/Home';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register2' element={<Register2 />}/>

      </Routes>
    </>
  );
}

export default App;
