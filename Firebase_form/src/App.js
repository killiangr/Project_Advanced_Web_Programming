import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import AddEdit from "./pages/AddEdit";
import Home from "./pages/Home";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import Header from "./components/Header.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ToastContainer position="top-center" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddEdit} />
          <Route path="/update/:id" component={AddEdit} />
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
