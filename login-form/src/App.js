import './App.css';
import FormInputRow from './components/form-input-row';
import FormRowSubmitBtn from './components/form-row-submit-btn';
import Header from './components/header';
import './css/Style.css';

function App() {
  return (
    <div className="main-content">
      <Header />
      <div className='form-content'>
        <FormInputRow nameId="username" label="Username" inputType="text"/>
        <FormInputRow nameId="password" label="Password" inputType="password"/>
        <FormRowSubmitBtn />
        <Forget />
      </div>
    </div>
  );
}

export default App;
