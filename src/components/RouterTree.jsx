import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Event from "./Event";
import CreateEvent from "./Event/CreateEvent";

const RouterTree = () => {
  return (
    <>
      <Routes>
        <Route path="/event" element={<Event />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default RouterTree;
