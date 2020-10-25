import React, { useEffect, useState } from 'react';
import './App.css';
// import Navbar from './components/Navbar'

// import { BrowserRouter as Router, Route } from 'react-router-dom'

// import Bars from './contents/bars'

function App() {

  const [ info, setInfo ] = useState({})
  const [ errors, setErroes] = useState(false)


  // GET Method
  async function fetchData() {
    const headers = {
      'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjhkMzNjOGY3MzZjMDFiZDQ2MTliZmIiLCJSb2xlIjoxLCJpYXQiOjE2MDM2MTEwODgsImV4cCI6MTYwMzYxNDY4OH0.ra4x1IIIw92FmCtmCq5byUgzSB861AhdOyXk1DMFEug',
    }

    const res = await fetch('http://35.240.130.253:3000/reservations', { headers })
    
    res
      .json()
      .then(res => setInfo(res))
      .catch(err => setErroes(err));

  }

  useEffect(() => {
    fetchData();
  }, []);
  
  return(
  //   <Router>
  //     <div className="App">
  //       <Navbar />
  //       <Route exact path="/">
  //         <Bars />
  //       </Route>
  //     </div>
  //   </Router>
    
    
    <div>
      <span>{JSON.stringify(info)}</span>
      <hr></hr>
      <span>Error : {JSON.stringify(errors)}</span>
      
    </div>

  )
}

export default App;
