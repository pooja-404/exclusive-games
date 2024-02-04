
import './App.css';
import Footersec from './components/Footersec';
import Headersec from './components/Headersec';
import Jackpot from './components/Jackpot';
import Jouges from './components/Jouges';
import Lanza from './components/Lanza';
import Nevsec from './components/Nevsec';
import Plataforma from './components/Plataforma';
import Mission from './components/Mission';
import Marca from './components/Marca';
import Por from './components/Por';
import Accordiansec from './components/Accordiansec';
import Ellos from './components/Ellos';
import Platinum from './components/Platinum';
import Luxury from './components/Luxury';
import Silver from './components/Sliver';
import Triple from './components/Triple';
import Backtotop from './components/Backtotop';
import Preloder from './components/Preloder';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';



function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 2000,
      }
    );
  }, [])
  return (
    <div className="bg-[#00141b] overflow-x-clip">
      <Preloder />
      <div className='bg-[url(./assets/images/headerbg.png)] bg-cover bg-center bg-no-repeat w-full h-full md:min-h-screen  min-h-[80%]  overflow-x-clip '>
        <div className='bg-[url(./assets/images/navbg.png)] bg-cover bg-center bg-no-repeat '>
          <Nevsec />
        </div>
        <Headersec />

      </div>
      <Mission />
      <Marca />
      <div className='lg:bg-[url(./assets/images/secbg.png)] lg:bg-size lg:bg-center lg:bg-no-repeat w-full h-full'>
        <Jackpot />
        <Lanza />
        <Jouges />
      </div>
      <div className='lg:!bg-[url(./assets/images/porbg.png)] lg:bg-center lg:bg-no-repeat lg:w-full lg:h-full lg:min-h-screen lg:!bg-size'>
        <Por />
      </div>
      <Triple />
      <Silver />
      <Luxury />
      <Platinum />
      <Ellos />
      <Accordiansec />
      <Plataforma />
      <Footersec />
      <Backtotop />
    </div>
  );
}
export default App;
