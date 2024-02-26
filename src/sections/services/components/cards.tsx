import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { ServicesData } from "@/data/mock-data";

type Props = {
  data: ServicesData;
};

export const Cards = ({ data }: Props) => {
  return (
    <Card className="w-[80%] lg:w-[20%] p-5">
      <CardHeader>{data.title}</CardHeader>
      <CardContent>{data.text}</CardContent>
    </Card>
  );
};
