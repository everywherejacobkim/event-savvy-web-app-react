import React from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import bgBricks from '@/assets/textures/bg-bricks.jpg';
import marathon from '@/assets/images/marathon.jpg';

const Home = ({setSelectedPage}: {setSelectedPage:(value: string) => void}) => {
  
  const isWeb = useMediaQuery("(min-width: 768px)");
  
  return (
    <section id='home' className='gap-16 py-10 md:h-full md:pb-0'>
      <div className='relative'>
        <img src={bgBricks} alt="Brick Background" />
        <div>
          <div className='absolute top-0 left-0 w-full h-full bg-cool-400 bg-opacity-30'>
            Event Savvy
          </div>
        </div>
      </div>


    </section>
  )
}

export default Home