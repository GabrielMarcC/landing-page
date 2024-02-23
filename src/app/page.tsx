import { AboutSection } from "@/features/about";
import { HomeSection } from "@/features/home";
import { Menu } from "@/features/menu";

export default function Home() {
  return (
    <main className="flex w-full h-screen flex-col items-center justify-between absolute">
      <Menu />
      <HomeSection />
      <AboutSection />
    </main>
  );
}
