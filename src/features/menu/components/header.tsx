import Image from "next/image";
import { Drawer } from "./drawer";

export const Header = () => {
  return (
    <header className="w-[100%] h-[100px] flex items-center justify-between bg-white p-[4rem] lg:p-[5.5rem]">
      <Drawer />
      <div className="p-3 w-[100px] h-[100px] ml-11">
        <Image
          src={"/logo.jpg"}
          alt="brillare logo"
          width={100}
          height={100}
          className="rounded-xl"
        />
      </div>
      <nav className="w-[30%] items-center justify-center gap-12 text-darkgray hidden sm:block md:flex lg:flex font-bold">
        <span className="hover:text-gold hover:cursor-pointer">Início</span>
        <span className="hover:text-gold hover:cursor-pointer">Sobre</span>
        <span className="hover:text-gold hover:cursor-pointer">Projetos</span>
        <span className="hover:text-gold hover:cursor-pointer">Contato</span>
      </nav>
    </header>
  );
};
