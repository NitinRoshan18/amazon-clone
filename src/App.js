import React,{useEffect} from "react";
import "./App.css";
import { Header, SubHeader } from "./Header";
import { Home } from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Checkout  from "./Checkout";
import { StateProvider, useStateValue  } from "./StateProvider";
import Login from "./Login";
import { auth } from "./Firebase";
import Payment from "./Payment";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      console.log('The user is >>>', authUser)
      if(authUser){
        dispatch({
          type: 'SET_USER',   //user logged in
          user: authUser
        })
      }else{
        
        dispatch({
          type: 'SET_USER',   //user logged out
          user: null
        })
      }

  })
  }, [])

  return (
    <Router>
      <div className="app">
        <Routes>
        

          <Route path="/" element={
            <>
              <Header />
              <SubHeader />
              <Home />
            </>

          } />

          <Route path="/login"  element={
            <Login/>
            
          } />


          <Route path="/Checkout" element={
            <>
              <Header />
              <Checkout/>
              <StateProvider/>
            </>
          } />

          <Route path="/Payment" element={
            <>
              <Header />
              <Payment/>
            </>
          } />

        </Routes>
      </div>
    </Router>
  );
}

export default App;