import { BuildingIcon, FaHouseUserIcon, FaTreeIcon, Tools } from "@/icons";
import { ReactNode } from "react";

export type AboutData = {
  icon: ReactNode;
  title: string;
};

export type ServicesData = {
  title: string;
  text: string;
};

export const aboutData: AboutData[] = [
  { icon: <FaHouseUserIcon />, title: "residêncial" },
  { icon: <BuildingIcon />, title: "comercial" },
  { icon: <FaTreeIcon />, title: "sustentável" },
  { icon: <Tools />, title: "incorporação" },
];

export const servicesData = [
  {
    title: "Elétrica",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum libero cupiditate laborum quibusdam incidunt aspernatur ab doloribus cumque, cum dolore unde explicabo sapiente expedita earum dicta et consequuntur natus dignissimos?",
  },
  {
    title: "Luminotécnico",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum libero cupiditate laborum quibusdam incidunt aspernatur ab doloribus cumque, cum dolore unde explicabo sapiente expedita earum dicta et consequuntur natus dignissimos?",
  },
  {
    title: "Hidrossanitário",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum libero cupiditate laborum quibusdam incidunt aspernatur ab doloribus cumque, cum dolore unde explicabo sapiente expedita earum dicta et consequuntur natus dignissimos?",
  },
  {
    title: "Undefined",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum libero cupiditate laborum quibusdam incidunt aspernatur ab doloribus cumque, cum dolore unde explicabo sapiente expedita earum dicta et consequuntur natus dignissimos?",
  },
];
