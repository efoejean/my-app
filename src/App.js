import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Switch is not working this version. we are using Routes instead of Switch.

import Navbar from "./components/Navbar/Navbar";

import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";


const App = () => 
   (

    <BrowserRouter>
  <Container maxWidth="lg">
    
    <Navbar/>
    <Routes>
      <Route exact path="/" exact component={Home} />
      <Route path="/auth" exact component={Auth} />
    </Routes>

  </Container>

</BrowserRouter>

  );


export default App;