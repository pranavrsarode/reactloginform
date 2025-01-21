import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './css/Style.css';
import LoginForm from './components/login-form';
import ForgetPassword from './components/forgot-password';

function App() {
  return (

    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginForm />} />
          <Route path="/forget" element={<ForgetPassword />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
