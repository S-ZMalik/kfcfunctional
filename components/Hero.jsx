import React, { useEffect, useState } from 'react'
import { heroData} from '../api/data.js'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';


function Hero() {
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        let intervelId = setInterval(() => {
            setIndex(prev => (prev + 1) % heroData.length);
        }, 5000);

        return () => clearInterval(intervelId);
    }, []);
// style={{backgroundImage: `url(${heroData[index]})`}}
  return (
    <>
   <section className="hero-section" >
    <button className='left-arrow' onClick={() => setIndex((index + 1) % heroData.length)}><IoIosArrowDropleftCircle className='icon'/></button>
    <img className='hero-section-img' src={heroData[index]} alt="" />
    <button className='right-arrow' onClick={() => setIndex((index - 1 + heroData.length) % heroData.length )}><IoIosArrowDroprightCircle className='icon'/></button>
   </section>

   <div className="main-btn">
     <button>REORDER</button>
   </div>
   </>
  )
}

export default Hero