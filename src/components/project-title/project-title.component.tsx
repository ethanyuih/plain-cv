import { FC } from 'react';

import { AiFillGithub } from 'react-icons/ai';

import { FaOctopusDeploy } from 'react-icons/fa';
import { SiUnity, SiGithub } from 'react-icons/si';
import { RxGithubLogo } from 'react-icons/rx';

import './project-title.styles.scss';

type Props = {
  name: string;
  github: string | undefined;
  deploy: string | undefined;
  duration: string;
};

const ProjectTitle: FC<Props> = ({ name, github, deploy, duration }) => {
  return (
    <div className='project-title-container'>
      <div className='projects-info'>
        <h3>{name} </h3>
        {github && (
          <a href={github} className='icon-button'>
            <SiGithub /> <span>Git Repo</span>
          </a>
        )}
        {deploy && (
          <a href={deploy} className='icon-button'>
            <FaOctopusDeploy className='icon' />
            <span>Deploy</span>
          </a>
        )}
      </div>
      <div className='duration'>{duration}</div>
    </div>
  );
};

export default ProjectTitle;
