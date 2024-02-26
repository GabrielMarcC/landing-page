import { servicesData } from "@/data/mock-data";
import { Cards } from "./components/cards";

export const ServicesSection = () => {
  return (
    <section className="w-full h-auto bg-gold p-5 flex flex-col gap-16 items-center justify-center lg:flex-row lg:p-14">
      {servicesData.map((data, index) => {
        return <Cards key={index} data={data} />;
      })}
    </section>
  );
};
