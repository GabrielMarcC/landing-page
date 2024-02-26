import { aboutData } from "@/data/mock-data";
import { Categories } from "./components/categories";
import { AnimateWords } from "../../features/menu/components/animate-words";
import { ContainerContent } from "@/features/menu/components/container-content";

export const AboutSection = () => {
  return (
    <section className="w-full min-h-screen bg-white pt-12">
      <div className="w-full bg-white flex flex-col lg:flex-row">
        <div className="w-full lg:w-[45%] flex flex-col  justify-center items-center p-4">
          <ContainerContent delay={0.3} duration={0.3}>
            <h1 className="text-[31px] lg:text-[40px] leading-10 text-center tracking-tighter font-sans text-gold">
              Uma empresa especializada em <AnimateWords />
            </h1>
          </ContainerContent>
        </div>
        <div className="w-full  lg:w-[50%] lg:px-5 pt-32 flex flex-col justify-center items-center">
          <ContainerContent delay={0.3} duration={0.3}>
            <h2 className="text-xl lg:text-[40px] font-sans text-black font-bold pb-6">
              Sobre a <span className="text-gold">Brillare</span>
            </h2>
          </ContainerContent>
          <ContainerContent delay={0.6} duration={0.6}>
            <p className="text-center lg:text-justify p-4 text-darkgray">
              Com anos de experiência nossa equipe de arquitetos está
              comprometida em fornecer projetos bonitos, funcionais e
              sustentáveis.
            </p>
          </ContainerContent>
          <ContainerContent delay={0.8} duration={0.8}>
            <p className="text-center p-4 text-darkgray lg:text-justify">
              Trabalhamos em estreita colaboração com nossos clientes, do
              planejamento inicial à conclusão da construção, para garantir que
              suas visões sejam realizadas. Oferecemos um serviço excepcional
              que excede as expectativas dos nossos clientes.
            </p>
          </ContainerContent>
        </div>
      </div>
      <ContainerContent delay={1} duration={1}>
        <div className="w-full flex justify-center items-center flex-col lg:flex-row lg:pt-12">
          {aboutData.map((data, index) => {
            return (
              <Categories icon={data.icon} title={data.title} key={index} />
            );
          })}
        </div>
      </ContainerContent>
    </section>
  );
};
