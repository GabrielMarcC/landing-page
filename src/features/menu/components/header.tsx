import Image from "next/image";
import { Drawer } from "./drawer";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="w-[100%] h-[100px] flex items-center justify-between p-[4rem] lg:p-[5.5rem]">
      <Drawer />
      <div className="p-3 w-[100px] h-[100px] ">
        <Image
          src={"/logo.jpg"}
          alt="brillare logo"
          width={100}
          height={100}
          className="rounded-xl"
        />
      </div>
      <nav className="w-[30%] items-center justify-center gap-12 text-darkgray hidden sm:block md:flex lg:flex font-bold  ">
        <span className="hover:text-gold hover:cursor-pointer">Início</span>
        <span className="hover:text-gold hover:cursor-pointer">Sobre</span>
        <span className="hover:text-gold hover:cursor-pointer">Projetos</span>
      </nav>
      <Button
        variant="outline"
        className="bg-gold   rounded-2xl text-gold hidden sm:block md:flex lg:flex lg:items-center  font-bold text-[16px] text-black hover:bg-black hover:text-white hover:transform"
      >
        Contato
      </Button>
    </header>
  );
};
