import Image from "next/image";
import Heropage from "./(app)/heropage";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { BackgroundLines } from "@/components/ui/background-lines";
import AboutPage from "./(app)/AboutPage";
import SkillsPage from "./(app)/SkillsPage";
import ProjectPage from "./(app)/ProjectPage";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen antialiased">
        <BackgroundBeamsWithCollision  children={<Heropage />} />
        <AboutPage />
        <SkillsPage />
        <ProjectPage />
      </main>
    </div>
  );
}
