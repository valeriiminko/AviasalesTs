import React, { useState } from "react";
import Filter from "../Filter/Filter";
import Tickets from "../Tickets/Tickets";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { usedTypedSelector } from "../hooks/usedTypedSelector";
import "./App.scss";
import Modal from "../Modal/Modal";
import { Layout } from "../Layout/Layout";

function App() {
  const [isActive, setActive] = useState<boolean>(false);

  return (
    <>
      {/* <BrowserRouter> */}
      <Routes>
        <Route
          path="/"
          element={<Layout setActive={setActive} isActive={isActive} />}
        >
          {/* <Route path='/filter' element={<Filter setActive={setActive} isActive={isActive}/>} />
              <Route path='/tickets' element={<Tickets setActive={setActive} isActive={isActive} />} />
              <Route path='/modal' element={isActive && <Modal setActive={setActive} isActive={isActive}/>}/> */}
        </Route>
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
