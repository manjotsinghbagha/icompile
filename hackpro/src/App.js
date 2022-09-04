import './App.css';
import {  useState } from 'react';
import Mvp from './component_js/Mvp.js'
import Tabheader from './component_js/Tabheader';
import CreateSheet from './component_js/CreateSheet';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";


function App() {

  let [pages,setPages] = useState([])
  let [myArray, setArray] = useState([])


  function addTab() {
    let enteredName = prompt('Name Your code')
    if(enteredName === '')  return;
    setPages([ ...pages,enteredName])

    let index = myArray.length
    setArray([...myArray,<Mvp id={index} />]);
    // myArray.push(<Mvp id={index} />)
  }

  function delFn() {
    let a = [...myArray]
    a.pop()
    setArray([...a])

    a=[...pages]
    a.pop()
    setPages([...a])

  }



  return (<Router>
    <div className="App">
      {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        navigation bar 

      <div className='navi'>
        <Link to="/">
          <div className='back-btn'>
            <img src='./assets/arrow.png' />
          </div>
        </Link>

        <Link to="/">

        <div className='back-btn '>
          <img src='./assets/user.png' />
        </div>
        </Link >
      </div> 
      
      --------------------------------------------------------------------------------------------------------------------------------------------------*/}



      <div className="tab_bar">


        <div className='homesvg' >
          <Link to="/">
            <img src='./assets/home.png' />
          </Link>
        </div>

        {pages.map((item, index) => {
          return <Link to={`/${index}`}><Tabheader title={item} k={index} delFn={delFn} /></Link>

        })}

        <div className='homesvg' onClick={addTab}>
          <img src='./assets/plus.png' />
        </div>


      </div>
      <Routes>
    <Route exact path={`/`} element={<CreateSheet fun={addTab} />}></Route>
    </Routes>

      {myArray.map((item, index) => {
        return (<Routes>
          <Route exact path={`/${index}`} element={myArray[index]}></Route>
        </Routes>)
      })}

    </div >



  </Router>
  );
}

export default App;
