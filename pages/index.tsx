import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Aos from "aos";
import type { GetStaticProps } from "next";
import Head from "next/head";
import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Loading from "@/components/Loading";
import MusicModal from "@/components/Music/MusicModal";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Link from "next/link";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { fetchPageInfo } from "@/Utils/fetchPageInfo";
import { fetchExperiences } from "@/Utils/fetchExperiences";
import { fetchSkills } from "@/Utils/fetchSkills";
import { fetchProjects } from "@/Utils/fetchProjects";
import { fetchSocial } from "@/Utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [audioMusic, setAudioMusic] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Check if the code is running in the browser
    if (typeof window !== "undefined") {
      const audioFile = "/files/Westlife_.mp3";
      const audio = new Audio(audioFile);
      setAudioMusic(audio);
    }
  }, []);

  const play = () => {
    setPlaying(true);
    if (audioMusic) {
      audioMusic.play();
    }
    setModal(false);
  };

  const pause = () => {
    setPlaying(false);
    if (audioMusic) {
      audioMusic.pause();
    }
    setModal(false);
  };

  const close = () => {
    setModal(false);
  };

  useEffect(() => {
    Aos.init({
      offset: 300,
      delay: 0,
      duration: 700,
    });
  }, []);

  //This is for the loader timer before the main page comes on
  useEffect(() => {
    const loader = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(loader);
  }, []);

  //This sets a timer for the music modal to appear on the screen.
  useEffect(() => {
    const modalTimer = setTimeout(() => {
      setModal(true);
    }, 4000);
    return () => clearTimeout(modalTimer);
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className="bg-[#010514] text-white">
      <Head>
        <title>{pageInfo?.firstName} - Portfolio</title>
      </Head>

      {modal && <MusicModal play={play} pause={pause} closebtn={close} />}

      {modal && <div className="overlay" />}

      <Header play={play} pause={pause} playing={playing} />

      <section id="hero" className="bg-[#010514]">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="bg-[#010514] ">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="bg-[#010514] ">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="bg-[#010514] ">
        <ContactMe socials={socials} />
      </section>

      <Link href="#hero">
        <div className="bg-[#010514] flex flex-col text-white p-4 gap-0 items-center  mt-[-1rem] pb-[2rem]  justify-center">
          <div className="text-[0.9rem] tracking-tight">A portfolio by</div>
          <div className="text-[1.2rem] text-[#65C23A] font-semibold  ">
            IMMA<span className="text-white">TECHY</span>
          </div>
          <div className="text-[0.9rem] tracking-tight">
            Developed by Immaculeta Nwokejeme
          </div>
          <div className="flex flex-row items-center mt-[3rem] justify-center gap-1">
            <Image
              className=""
              src="/images/copyright.png"
              width={20}
              height={20}
              alt="copyright"
            />
            <div className="text-white text-center p-0 text-[0.8rem]">
              Portfolio by Immatechy All rights reserved 2023.
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // Next.js will attempt to re-generate the page:
    //- When a request cores in
    //- At most once every 10 seconds
    revalidate: 10,
  };
};
