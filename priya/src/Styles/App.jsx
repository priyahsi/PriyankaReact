

import Home from './Home.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import UseState from '../Date27/UseState.jsx';
import UseEffect from '../Date31/UseEffect.jsx';
import UseEffectTwo from '../Date31/UseEffectTwo.jsx';
import UseEffectThree from '../Date31/UseEffectThree.jsx';


import { Routes, Route } from 'react-router-dom';
import UseEffectFour from '../Date01/UseEffectFour.jsx';
import PropDrilling from '../Date02/11/PropDrilling.jsx';
import PropDrillingTwo from '../Date02/PropDrillingTwo.jsx';
import Mapping from '../Date02/Mapping.jsx';
import MappingTwo from '../Date02/MappingTwo.jsx';
import { useState } from 'react';

function App() {
  const [students, setStudents] = useState(["A", "B", "C", "D"])
  console.log(students, "-students")
  const [studentsData, setStudentsData] = useState(["A", "B", "C", "D"])
  console.log(studentsData, "-studentsData")
  const [counter, setCounter] = useState(10)

  function IncrementCounter() {
    setCounter((prevValue) => prevValue + 1)
  }


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
        <Route path='/useeffectfour' element={<UseEffectFour />} />
        <Route path='/propdrilling' element={<PropDrilling shital={students} myName= "priti" />} />
       
        <Route path='/propdrillingtwo' element={<PropDrillingTwo counter={counter} IncrementCounter={IncrementCounter}/>} />
        <Route path='/mapping' element={<Mapping />} />
        <Route path='/mappingtwo' element={<MappingTwo />} />
       
       
       

        
      </Routes>
    </div>
  );

}

export default App;