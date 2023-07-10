import Head from 'next/head';
import About from "../components/About";
import Header from '../components/Header';


const Home = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20">
      <Head>
        <title>My Portfolio</title>
      </Head>
      <Header/>
    </div>
  )
}

export default Home;

