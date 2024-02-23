import {
  BuildingIcon,
  FaHouseUserIcon,
  FaTreeIcon,
  GrConfigureIcon,
} from "@/icons";
import { ReactNode } from "react";

export interface AboutData {
  icon: ReactNode;
  title: string;
}

export const aboutData: AboutData[] = [
  { icon: <FaHouseUserIcon />, title: "residêncial" },
  { icon: <BuildingIcon />, title: "comerciais" },
  { icon: <FaTreeIcon />, title: "sustentáveis" },
  { icon: <GrConfigureIcon />, title: "incorporação" },
];
