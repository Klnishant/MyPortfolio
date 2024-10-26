import Heropage from "./(app)/heropage";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import AboutPage from "./(app)/AboutPage";
import SkillsPage from "./(app)/SkillsPage";
import ProjectPage from "./(app)/ProjectPage";
import ContactPage from "./(app)/ContactPage"
import ConnectionPage from "./(app)/ConnectionPage";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen antialiased">
        <BackgroundBeamsWithCollision  children={<Heropage />}  />
        <AboutPage />
        <SkillsPage />
        <ProjectPage />
        <ContactPage />
      </main>
    </div>
  );
}
