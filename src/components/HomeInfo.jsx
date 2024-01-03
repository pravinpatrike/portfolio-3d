// import React from 'react'
// import {arrow} from '../assets/icons'
// import { Link } from 'react-router-dom'

// const InfoBox = ({ text, link, btnText }) => {
//     <div>
//         <p className='font-medium sm:text-xl text-center'>{text}</p>
//         <Link to={link} className="neo-brutalism-white neo-btn">
//             {btnText}
//             <img src={arrow} className='w-4 h-4 object-contain'/>
//         </Link>
//     </div>
// }


// const renderContent = {
//     1: (
//         <h1 className='sm:text-xl sm:leading-snug text-center 
//         neo-brutalism-blue py-4 px-8 text-white mx-5'
//         >
//             Hi, I am <span className='font-semibold'> Pravin</span>👋
//             <br/>
//             A software Engineer from India
//         </h1>
//     ),
//     2: (
//         <InfoBox 
//         text="worked with many companies and picked up many skills aling the way"
//         link="/about"
//         btnText="Learn more"
//         />
//     ),
//     3: (
//         <InfoBox 
//         text="Built various projects during the period. Curious about the impact?"
//         link="/projects"
//         btnText="visit my portfolio!"
//         />
//     ),
//     4: (
//         <InfoBox 
//         text="Need a project done or looking for a dev? I'm just a few keystrokes away!"
//         link="/contact"
//         btnText="Let's Talk!"
//         />
//     )
// }




// const HomeInfo = ({ currentStage }) => {
//     return renderContent[currentStage] || null
// }

// export default HomeInfo


import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
                <h1 className='sm:text-xl sm:leading-snug text-center 
                neo-brutalism-blue py-4 px-8 text-white mx-5'
                >
                    Hi, I am <span className='font-semibold'> Pravin</span>👋
                    <br/>
                    A software Engineer from India
                </h1>
            )

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Worked with many companies <br /> and picked up many skills along the way
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
        Built various projects during the period.<br /> Curious about the impact?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
      Need a project done or looking for a dev? <br/> I'm just a few keystrokes away! 
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;