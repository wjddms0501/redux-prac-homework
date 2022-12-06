import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "../pages/Home";
// import About from "../pages/About";
// import Contact from "../pages/Contact";
// import Works from "../pages/Works";
// import Work from "../pages/Work";
// import Layout from "../components/layout/Layout";
import TodoList from "../pages/TodoList";
import Todo from "../components/todo/Todo";
import App from "../App";

const Router = () => {
  return (
    <BrowserRouter>
      <App>
        {/* <Routes> */}
        {/* 
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} /> */}
        {/* <Route path="/" element={<App />} /> */}
        {/* <Route path="/" element={<TodoList />} /> */}
        {/* <Route path="detail/:id" element={<Todo />} /> */}
        {/* </Routes> */}
      </App>
    </BrowserRouter>
  );
};

export default Router;
