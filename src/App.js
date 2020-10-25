import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Bars from './contents/bars'

function App() {

  const [ info, setInfo ] = useState({})
  const [ errors, setErroes] = useState(false)


  // GET Method
  async function fetchData() {
    const res = await fetch('http://35.240.130.253:2000/reservations/dev')
    
    res
      .json()
      .then(res => setInfo(res))
      .catch(err => setErroes(err));

  }

  useEffect(() => {
    fetchData();
  }, []);
  
  return(
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Bars />
        </Route>
      </div>
    </Router>
    
    
    // <div>
    //   <span>{JSON.stringify(info)}</span>
    //   <hr></hr>
    //   <span>Error : {JSON.stringify(errors)}</span>
    //   <hr />
    //   <p> HEflbkdpgbgO</p>
    // </div>

  )
}

export default App;
