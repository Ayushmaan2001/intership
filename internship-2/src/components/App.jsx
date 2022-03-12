import '../scss/App.scss';
import Navbar from './Navbar';
import SignUp from './Signup';
import ForgetPassword from './forgetPassword';
import Login from './Login';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/forgetpassword" element={<ForgetPassword />} />
      </Routes>
    </>
  );
}

export default App;
