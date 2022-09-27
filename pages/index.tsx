import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from "../components/About";
import WorkExperience from '../components/WorkExperience';
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe"
import Link from 'next/link';
import { PageInfo, Experience, Skill, Project, Social  } from "../typings"
import { fetchPageInfo } from '../Utils/fetchPageInfo';
import { fetchExperience } from '../Utils/fetchExperience';
import { fetchSkills } from '../Utils/fetchSkills';
import { fetchProject } from '../Utils/fetchProject';
import { fetchsocial } from '../Utils/fetchSocials';

type Props = {
  pageInfo: PageInfo;
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({pageInfo, experience, skills, projects, socials}:Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20">
      <Head>
        <title>My Portfolio</title>
      </Head>

      <Header socials={socials} />

      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>

      <section  id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      <section  id='experience' className='snap-center'>
        <WorkExperience experience={experience}/>
      </section>

      <section  id='skills' className='snap-start'>
        <Skills />
      </section>

      <section  id='projects' className='snap-start'>
        <Projects />
      </section>

      <section  id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className='sticky-bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img 
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
              src='https://images.unsplash.com/photo-1664008824754-2eff11fe7a54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' 
              alt='' 
            />
          </div>
        </footer>
      </Link>

    </div>
  )
}

export default Home;

export const getStaticProps : GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experience: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProject();
  const socials: Social[] = await fetchsocial();

  return {
    props: {
      pageInfo,
      experience,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
}; 
