import { BuildingIcon, FaHouseUserIcon, FaTreeIcon, Tools } from "@/icons";
import { ReactNode } from "react";

export interface AboutData {
  icon: ReactNode;
  title: string;
}

export const aboutData: AboutData[] = [
  { icon: <FaHouseUserIcon />, title: "residêncial" },
  { icon: <BuildingIcon />, title: "comercial" },
  { icon: <FaTreeIcon />, title: "sustentável" },
  { icon: <Tools />, title: "incorporação" },
];
