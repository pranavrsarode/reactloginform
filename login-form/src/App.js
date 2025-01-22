import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './css/Style.css';
import LoginForm from './components/login-form';
import ForgetPassword from './components/forgot-password';
import Registration from './components/registration';
import Welcome from './components/welcome';

function App() {
  return (

    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginForm />} />
          <Route path="/forget" element={<ForgetPassword />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
