import { AboutData } from "@/data/mock-data";

export const Categories = ({ icon, title }: AboutData) => {
  return (
    <div className="w-full pt-10">
      <div className="w-full gap-2 flex lg:flex-row flex-col justify-center items-center">
        {icon}
        <span className="text-[15px] font-sans text-gold uppercase font-semibold p-6">
          {title}
        </span>
      </div>
    </div>
  );
};
