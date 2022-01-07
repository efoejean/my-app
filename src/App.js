import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter,  Route, Routes } from "react-router-dom"; // Switch is not working this version. we are using Routes instead of Switch.

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

// usinng components files in the app.js file
// Routes is a component that takes in a list of routes.
const App = () => 
   (

    <BrowserRouter> 
  <Container maxWidth="lg">  
    <Navbar/>  
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/auth" element={<Auth/>} />
    </Routes>  
  </Container>
</BrowserRouter>
);


export default App;