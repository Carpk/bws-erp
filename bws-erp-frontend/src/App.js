import './App.css';
// import ReactDOM from 'react-dom';
import { React } from "react";

// import axios from './components/axios'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ThemeProvider } from 'react-bootstrap';
import Header from './pages/components/Header';

import Landing from "./pages/landing";
import Orders from "./pages/orders";
import Tasks from "./pages/tasks";
import Accounting from "./pages/accounting";
import Projects from "./pages/projects";
import Project from "./pages/project";
import Home from "./pages/home";
import User from "./pages/user";
import Users from "./pages/users";
import Estimate from "./pages/estimate";
import Item from "./pages/item";

function App() {
  return (
    <div >
      <Header />
      <BrowserRouter>
       <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/accounting" exact element={<Accounting />} />
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/project/:id" exact element={<Tasks />} />

          <Route path="/orders" exact element={<Orders />} />
          <Route path="/user/home" exact element={<Home />} />
          <Route path="/user/:id" exact element={<User />} />

          <Route path="/accounting/users" exact element={<Users />} />


          <Route path="/accounting/estimate/new" exact element={<Estimate />} />
          <Route path="/accounting/estimate/:id" exact element={<Project />} />
          <Route path="/accounting/estimate/:id/:id" exact element={<Item />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
