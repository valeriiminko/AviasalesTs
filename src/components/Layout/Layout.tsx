import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Filter from "../Filter/Filter";
import { Props } from "../../types/modalTypes";
import Tickets from "../Tickets/Tickets";
import Modal from "../Modal/Modal";

export const Layout: React.FC<Props> = ({ isActive, setActive }) => {
  return (
    <div className="container">
      <div className={isActive ? "row onblur" : "row"}>
        <Outlet />
        <Filter isActive={isActive} setActive={setActive} />
        <Tickets isActive={isActive} setActive={setActive} />
      </div>
      {isActive && <Modal setActive={setActive} isActive={isActive} />}
    </div>
  );
};
