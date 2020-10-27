import React, {useContext} from "react";
import Landing from "./pages/LandingPage/LandingPage"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import PrivateRoute from "./HighOrderComponents/PrivateRoute"
import UnPrivateRoute from "./HighOrderComponents/UnPrivateRoute"
import PDF from "./pages/PDFTrial/PDFTrial"
import FileComp from "./components/FilePond.jsx"


import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <UnPrivateRoute exact path = "/" component ={Login}/>
      <UnPrivateRoute path = "/signup" component ={Signup}/>
      <PrivateRoute path = "/landing"  component ={Landing}></PrivateRoute>
      <Route path = "/pdf" component = {PDF}></Route>
      <PrivateRoute path = "/filecomp" component = {FileComp}/>


    </Router>

  );
}

export default App;

