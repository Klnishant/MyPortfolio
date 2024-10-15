import Image from "next/image";
import Heropage from "./(app)/heropage";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Home() {
  return (
    <div>
      <main>
        <BackgroundBeamsWithCollision className="absolute inset-0"  children={<Heropage />} />
      </main>
    </div>
  );
}
