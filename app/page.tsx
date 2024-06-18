import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import RecentProjects from "@/components/ui/RecentProjects";
import { navItems } from "@/data/index";
import Clients from "@/components/ui/Clients";
export default function Home() {
  return (
   
   <main className="relative bg-black-100 first-line:flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <RecentProjects/>
        <Clients/>
      </div>
    </main>
  );
}
