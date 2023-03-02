import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import sabsewaImg from '../public/assets/projects/sabsewa.png'
import ktmkartImg from '../public/assets/projects/ktmkart.png'
import salesberryImg from '../public/assets/projects/salesberry.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects'
    data-aos="fade-right"
    data-aos-once="false"
    data-aos-duration="800"
    data-aos-delay="200"
    className='w-full container mt-[60px]  mb-[40px] w-[95%] mx-auto'>
      <div >
        <h2 className='py-4'>Projects</h2>
        <div className='grid grid-cols-1 gap-4 mt-[30px]'>
          <ProjectItem
            title='Salesberry'
            backgroundImg={salesberryImg}
            projectUrl='#'
            tech='React JS'
          />
          <ProjectItem
            title='Ktmkart'
            backgroundImg={ktmkartImg}
            projectUrl='#'
            tech='React JS'

          />
          <ProjectItem
            title='Sabsewa'
            backgroundImg={sabsewaImg}
            projectUrl='#'
            tech='React JS'

          />
          {/* <ProjectItem
            title='Salesberry UI'
            backgroundImg={twitchImg}
            projectUrl='#'
            tech='Next JS'

          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
