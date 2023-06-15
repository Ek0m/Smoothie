"use client"
import Image from "next/image";
import {MouseParallaxChild, MouseParallaxContainer} from 'react-parallax-mouse'



const Banner = () => {
  return ( 
    <section className="bg-primary bg-pattern lg:min-h-[768px] pt-16 lg:pt-16">
      <div className="container mx-auto min-h-[768px] flex items-center justify-center">
        <MouseParallaxContainer globalFactorX={0.4} globalFactorY={0.3} resetOnLeave className="w-full flex flex-col lg:flex-row justify-between items-center">
          <MouseParallaxChild factorX={0.1} factorY={0.2}>
            <div className="flex flex-col lg:flex-row items-center text-center lg:text-left flex-1 px-6 text-white"> 
              <div className="flex-1">
                <div className="font-bangers text-[32px] text-white uppercaase tracking-[0.03em]">Best in Town</div>
                <h1 className="text-6xl lg:text-8xl font-bangers drop-shadow-md ">Quick Munchies<br/> Maximum satisfaction</h1>
              </div>
              
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.2} factorY={0.3} className="relative">
            <div className="flex flex-col lg:flex-row items-center text-center lg:text-left flex-1 px-6">
              <div className="flex-1 flex justify-end max-w-sm lg:max-w-max">
                <Image src={'/HomeBanner.png'} width={550} height={558} alt="" priority={1} />
              </div>
            </div>
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    </section>
   );
};

export default Banner;
