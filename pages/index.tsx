import Image from 'next/image'
import type { GetStaticProps} from 'next';
import Head from 'next/head';
import About from "../components/About";
import ContactMe from "../components/ContactMe"
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from '../components/WorkExperience';
import Link from 'next/link';
import { Experience, PageInfo, Project, Skill, Social } from '@/typings';
import { fetchPageInfo } from '@/Utils/fetchPageInfo';
import { fetchExperiences } from '@/Utils/fetchExperiences';
import { fetchSkills } from '@/Utils/fetchSkills';
import { fetchProjects } from '@/Utils/fetchProjects';
import { fetchSocial } from '@/Utils/fetchSocials';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[]
}

const Home  = ({pageInfo, experiences, skills, projects, socials}: Props) => {
  return (
    <div className="bg-[#010514] text-white h-screen">
      <Head>
        <title>{pageInfo?.firstName} - Portfolio</title>
      </Head>
      
      <Header/>

      <section id='hero' className='bg-[#010514]'>
        <Hero pageInfo={pageInfo}/>
      </section>

      <section  id='about' className=''>
        <About pageInfo={pageInfo} />
      </section>

      <section  id='experience' className='bg-[#010514] '>
        <WorkExperience experiences={experiences} />
      </section>

      <section  id='skills' className='snap-start'>
        <Skills skills={skills}/>
      </section>

      <section  id='projects' className='bg-[#010514] '>
        <Projects projects={projects}/>
      </section>

      <section  id='contact' className='bg-[#010514] '>
        <ContactMe socials={socials} />
      </section>

      <Link href="#hero">
        <div className='bg-[#010514] flex flex-col text-white p-4 gap-0 items-center  pt-[3rem] pb-[2rem]  justify-center'>
          <div className='text-[0.9rem] tracking-tight'>A portfolio by</div>
          <div className='text-[1.2rem] text-[#65C23A] font-semibold  '>IMMA<span className='text-white'>TECHY</span></div> 
          <div className='text-[0.9rem] tracking-tight'>Developed by Immaculeta Nwokejeme</div>
          <div className='flex flex-row items-center mt-[3rem] justify-center gap-1'>
            <Image className='' src='/images/copyright.png' width={20} height={20} alt='copyright' />
          <div className='text-white text-center p-0 text-[0.8rem]'>Portfolio by Immatechy All rights reserved 2023.</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props:{
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


