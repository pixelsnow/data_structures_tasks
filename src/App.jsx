import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Task1 from "./Task1";
import Task2 from "./Task2";
import Task3 from "./Task3";
import Task4 from "./Task4";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="task1" element={<Task1 />} />
          <Route path="task2" element={<Task2 />} />
          <Route path="task3" element={<Task3 />} />
          <Route path="task4" element={<Task4 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
