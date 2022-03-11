import logo from './logo.svg';
import './App.css';
import Reqres from './components/post';
import Grid from './components/grid';
import Signup from './components/signup';
import Checkout from './components/checkout';
import SocialLogin from './components/socialLogin';
import Progress from './components/progress';
import Simple from './page';
import Links from './components/links';
import Form from './components/form';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/link'  element={<Links />}/>
        <Route exact path='/grid' element={<Grid />}/> 
        <Route exact path='/form' element={<Form />}/>
        <Route exact path='/' element={<Signup />}/> 
        <Route exact path='req' element={<Reqres />}/>
        <Route exact path='check' element={< Checkout />}/> 
        <Route exact path='social' element={<SocialLogin/>}/> 
        <Route exact path='prog' element={<Progress />}/>
        <Route exact path='simple' element={< Simple />} />
      </Routes>
    </Router>
  );
}

export default App;
