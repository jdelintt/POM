import React, { useContext } from "react";
import Landing from "./pages/LandingPage/LandingPage"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import PrivateRoute from "./HighOrderComponents/PrivateRoute"
import UnPrivateRoute from "./HighOrderComponents/UnPrivateRoute"
import PDF from "./pages/PDFTrial/PDFTrial"
import ESign from "./components/eSign";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";



import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      {/* <Header /> */}
    <Router>
      <UnPrivateRoute exact path="/" component={Login} />
      <UnPrivateRoute path="/signup" component={Signup} />
      <PrivateRoute path="/landing" component={Landing}></PrivateRoute>
      <PrivateRoute path="/pdf" component={PDF}></PrivateRoute>

    </Router>
    <Footer />
    </div>
  );
}

export default App;

