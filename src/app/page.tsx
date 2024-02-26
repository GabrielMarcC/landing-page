import { AboutSection } from "@/sections/about";
import { HomeSection } from "@/sections/home";
import { Menu } from "@/features/menu";
import { ServicesSection } from "@/sections/services";

export default function Home() {
  return (
    <main className="flex w-full h-screen flex-col items-center justify-between absolute">
      <Menu />
      <HomeSection />
      <AboutSection />
      <ServicesSection />
    </main>
  );
}
