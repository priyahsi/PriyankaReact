

import Home from './Home.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import UseState from '../Date27/UseState.jsx';
import UseEffect from '../Date31/UseEffect.jsx';
import UseEffectTwo from '../Date31/UseEffectTwo.jsx';
import UseEffectThree from '../Date31/UseEffectThree.jsx';


import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home  />} /> 
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
         <Route path='/usestate' element={<UseState />} />
         <Route path='/useeffect' element={<UseEffect />} />
        <Route path='/useeffectthree' element={<UseEffectTwo />} />
        <Route path='/useeffecttwo' element={<UseEffectThree />} />
       

        
      </Routes>
    </div>
  );

}

export default App;