import React from 'react'
import bonapp from '../assets/portfolio/bonapp.png'
import nf from '../assets/portfolio/NF.png'
import stay from '../assets/portfolio/stayOnTask.png'
import sweeper from '../assets/portfolio/sweeper.png'
import stick from '../assets/portfolio/stick.png'

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: bonapp,
      href: 'https://github.com/camcimber/Recipe-App',
    },
    {
      id: 2,
      src: nf,
      href: 'https://github.com/camcimber/Nutritional-Facts',
    },
    {
      id: 3,
      src: stay,
      href: 'https://github.com/camcimber/Stay-on-Task',
    },
    {
      id: 4,
      src: sweeper,
      href: 'https://github.com/camcimber/Minesweeper',
    },
    {
      id: 5,
      src: stick,
      href: 'https://www.dropbox.com/scl/fi/xiwaw7kp3s23i6jav2n6p/annotated-Final-20Design-20Report-20-282-29.docx.pdf?rlkey=q0ctfuzdvhj9w43qh32i1k7un&dl=0',
    },
  ];

  const handleCodeButtonClick = (link) => {
    window.open(link, '_blank'); // Open the link in a new tab
  };

  return <div
          name="portfolio" 
          className='bg-gradient-to-b from-black to-green-800 w-full text-white md:h-screen'>

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
              Portfolio</p>
            <p className='py-6'>Check out some of my work right here: </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

          {portfolios.map(({id, src, href}) =>(
           <div key={id} className="shadow-md shadow-black rounded-lg">
                <img 
                    src={src} 
                    alt="" 
                    className="rounded-md duration-200 hover:scale-105"
                 />
                <div className="flex items-center justify-center">
                    {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button> */}
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => handleCodeButtonClick(href)}>Learn More</button>
               </div>
           </div>
          ))}

           </div>
       </div> 
    </div>
  
};

export default Portfolio;