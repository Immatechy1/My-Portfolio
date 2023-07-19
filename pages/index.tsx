import Head from 'next/head';
import About from "../components/About";
import Header from '../components/Header';
import Hero from '../components/Hero';
import WorkExperience from '../components/WorkExperience';

const Home = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20">
      <Head>
        <title>My Portfolio</title>
      </Head>

      <Header/>

      <section id='hero' className='snap-start'>
        <Hero/>
      </section>

      <section  id='about' className='snap-center'>
        <About  />
      </section>

      <section  id='experience' className='snap-center'>
        <WorkExperience />
      </section>
      
    </div>
  )
}

export default Home;

