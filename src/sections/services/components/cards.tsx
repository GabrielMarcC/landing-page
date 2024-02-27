import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ServicesData } from "@/data/mock-data";

type Props = {
  data: ServicesData;
};

export const Cards = ({ data }: Props) => {
  return (
    <Card className="w-[80%] min-w-[20%] lg:w-[20%] p-5 min-h-60 shadow-lg shadow-darkgray bg-white border-none hover:bg-black hover:cursor-pointer ">
      <CardHeader className="font-sans text-[25px] leading-10 font-extrabold text-gold hover:text-white">
        {data.title}
      </CardHeader>
      <CardContent className="text-[15px] font-sans text-darkgray text-left hover:animate-pulse hover:text-white">
        {data.text}
      </CardContent>
    </Card>
  );
};
