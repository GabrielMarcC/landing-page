import { aboutData } from "@/data/mock-data";
import { Categories } from "./components/categories";
import { AnimateWords } from "../menu/components/animate-words";

export const AboutSection = () => {
  return (
    <section className="w-full min-h-screen bg-white pt-12">
      <div className="w-full bg-white flex flex-col lg:flex-row">
        <div className="w-full lg:w-[45%] flex flex-col  justify-center items-center p-4">
          <span className="text-[31px] lg:text-[40px] leading-10 text-center tracking-tighter font-sans text-gold">
            Uma empresa especializada em <AnimateWords />
          </span>
        </div>
        <div className="w-full  lg:w-[50%] lg:px-5 pt-32 flex flex-col justify-center items-center">
          <span className="text-xl lg:text-[40px] font-sans text-black font-bold pb-6">
            Sobre a <span className="text-gold">Brillare</span>
          </span>
          <p className="text-center lg:text-justify p-4 text-darkgray">
            Com anos de experiência nossa equipe de arquitetos está comprometida
            em fornecer projetos bonitos, funcionais e sustentáveis.
          </p>
          <p className="text-center p-4 text-darkgray lg:text-justify">
            Trabalhamos em estreita colaboração com nossos clientes, do
            planejamento inicial à conclusão da construção, para garantir que
            suas visões sejam realizadas. Oferecemos um serviço excepcional que
            excede as expectativas dos nossos clientes.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center flex-col lg:flex-row lg:pt-12">
        {aboutData.map((data, index) => {
          return <Categories icon={data.icon} title={data.title} key={index} />;
        })}
      </div>
    </section>
  );
};
