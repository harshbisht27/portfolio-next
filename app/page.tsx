'use client';

import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const Grid = dynamic(() => import('@/components/Grid'), { ssr: false });
const RecentProjects = dynamic(() => import('@/components/ui/RecentProjects'), { ssr: false });
const Clients = dynamic(() => import('@/components/ui/Clients'), { ssr: false });
const Experience = dynamic(() => import('@/components/ui/Experience'), { ssr: false });
const Approach = dynamic(() => import('@/components/ui/Approach'), { ssr: false });
const Footer = dynamic(() => import('@/components/ui/Footer'), { ssr: false });

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-hidden">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
