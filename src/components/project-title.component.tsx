import { FC } from 'react';

import { FaOctopusDeploy } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';
import styled from 'styled-components';

type Props = {
  name: string;
  github: string | undefined;
  deploy: string | undefined;
  duration: string;
};

const ProjectTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 18px;
`;

const ProjectsInfo = styled.div`
  display: flex;
  gap: 5px;
`;

const IconButton = styled.a`
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 2px 5px;
  border-radius: 40px;
  margin-top: -1px;
  border: 1px solid #aaa;

  span {
    font-size: 10px;
  }
`;

const ProjectTitle: FC<Props> = ({ name, github, deploy, duration }) => {
  return (
    <ProjectTitleContainer>
      <ProjectsInfo>
        <h3>{name} </h3>
        {github && (
          <IconButton href={github}>
            <SiGithub /> <span>Git Repo</span>
          </IconButton>
        )}
        {deploy && (
          <IconButton href={deploy}>
            <FaOctopusDeploy className='icon' />
            <span>Deploy</span>
          </IconButton>
        )}
      </ProjectsInfo>
      <div className='duration'>{duration}</div>
    </ProjectTitleContainer>
  );
};

export default ProjectTitle;
