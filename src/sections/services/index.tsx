import { servicesData } from "@/data/mock-data";
import { Cards } from "./components/cards";

export const ServicesSection = () => {
  return (
    <section className="w-full h-auto bg-gold  p-5 flex  gap-16 items-center justify-center flex-col lg:p-14">
      <h1 className="font-sans text-[40px] leading-10 font-bold text-black hover:text-white">
        O que oferecemos?
      </h1>
      <div className="w-[60%]">
        <p className="text-[15px] font-sans text-white font-semibold text-justify">
          Atendemos profissionais na elaboração de projetos complementares. Isso
          pode incluir uma variedade de serviços, como projetos elétricos,
          hidráulicos, estruturais, entre outros, que complementam o projeto
          principal de arquitetura ou engenharia.
        </p>
      </div>
      <div className="w-full h-auto flex flex-col lg:flex-row justify-center items-center gap-16">
        {servicesData.map((data, index) => {
          return <Cards key={index} data={data} />;
        })}
      </div>
    </section>
  );
};
