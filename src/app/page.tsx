import AboutMe from "@/components/layouts/about-me";
import Education from "@/components/layouts/education";
import Experience from "@/components/layouts/experience";
import Hero from "@/components/layouts/hero";
import Projects from "@/components/layouts/projects";
import SpotifyMusic from "@/components/layouts/spotify-music";
import SpotifyPlaylist from "@/components/layouts/spotify-playlist";
import TechStack from "@/components/layouts/tech-stack";
// import Divider from "@/components/ui/divider";

export default function HomePage() {
  return (
    <main>
      <Hero />
      {/* <Divider /> */}
      <AboutMe />
      {/* <Divider /> */}
      <TechStack />
      {/* <Divider /> */}
      <Experience />
      {/* <Divider /> */}
      <Education />
      {/* <Divider /> */}
      <Projects />
      {/* <Divider /> */}
      {/* <SpotifyMusic /> */}
      {/* <Divider /> */}
      <SpotifyPlaylist />
      {/* <Divider /> */}
    </main>
  );
}
