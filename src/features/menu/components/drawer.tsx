"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex sm:hidden">
      <button onClick={toggleDrawer}>
        <RxHamburgerMenu />
      </button>
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white z-50  ${
          isOpen ? "" : "transform -translate-x-full "
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="w-full pt-8 pl-7">
          <ul className="font-bold flex flex-col items-start justify-center">
            <li className="py-2 cursor-pointer">Início</li>
            <li className="py-2 cursor-pointer">Sobre</li>
            <li className="py-2 cursor-pointer">Serviços</li>
            <li className="py-2 cursor-pointer">Projetos</li>
            <li className="py-2 cursor-pointer">Contato</li>
          </ul>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  );
};
