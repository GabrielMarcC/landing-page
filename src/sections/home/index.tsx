import { Button } from "@/components/ui/button";

export const HomeSection = () => {
  return (
    <section className="w-full min-h-screen  flex justify-center items-center bg-main bg-cover bg-center bg-no-repeat bg-[rgba(0,0,0,0.4)]">
      <div className="bg-[rgba(0,0,0,0.75)] w-full h-full">
        <div className="z-40 w-[100%] h-full  flex flex-col justify-center items-center relative top-[0rem] lg:top-[6rem]">
          <div className="w-full flex flex-col lg:flex-row justify-center items-center">
            <h1 className="uppercase text-left text-[20px]  lg:text-center lg:text-[30px] text-gold font-bold px-11    truncate whitespace-normal">
              design que inspira, espaços que encantam: sua visão, nossa arte.
            </h1>
          </div>

          <p className="text-center  p-7 pt-[10rem] text-white text-[15px] font-medium">
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
  );
};
