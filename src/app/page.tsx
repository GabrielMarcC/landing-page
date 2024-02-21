import { Button } from "@/components/ui/button";
import { Menu } from "@/features/menu";

export default function Home() {
  return (
    <main className="flex w-full h-screen flex-col items-center justify-between absolute">
      <Menu />
      <section className="w-full min-h-screen lg:pt-7 flex justify-center items-start bg-main bg-cover bg-center bg-no-repeat bg-[rgba(0,0,0,0.4)]">
        <div className="bg-[rgba(0,0,0,0.4)] w-full h-full">
          <div className="z-40 w-full h-full  flex flex-col justify-center items-center relative top-[0rem]">
            <h1 className="uppercase text-center text-[26px] text-gold font-bold p-3 text-nowrap truncate whitespace-normal">
              construindo espaços.
            </h1>
            <h2 className="uppercase text-center text-[26px] text-white font-bold p-3">
              criando memórias.
            </h2>
            <p className="text-center  p-7 pt-9 text-white text-[15px] font-semibold">
              Com cada projeto, criamos não apenas espaços físicos, mas também o
              lar de memórias que durarão para sempre!
            </p>
            <Button
              variant="outline"
              className="bg-gold  border-none rounded-2xl text-gold md:flex lg:flex lg:items-center  font-bold text-[16px] text-black hover:bg-black hover:text-white hover:transform"
            >
              Contato
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
