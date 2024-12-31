import React, { FC } from "react";

import { FaOctopusDeploy } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import styled from "styled-components";
import { getDateMMYYYY } from "../assets/Utility/Utils";

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

  span {
    font-style: italic;
  }
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
  color: black; /* Set text color to black */
  text-decoration: none; /* Optional: removes underline from links */

  &:link,
  &:visited,
  &:hover,
  &:active {
    color: black; /* Ensure text is always black for all link states */
  }

  span {
    font-size: 10px;
  }
`;

const ProjectTitle: FC<Props> = ({ name, github, deploy, duration }) => {
  return (
    <ProjectTitleContainer>
      <ProjectsInfo>
        <h3 onClick={() => navigator.clipboard.writeText(name)}>{name} </h3>
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
      <div className='duration'>
        {(() => {
          const durations = duration.split("-");
          return (
            <div>
              <span
                onClick={() =>
                  navigator.clipboard.writeText(getDateMMYYYY(durations[0]))
                }
              >
                {durations[0]}
              </span>
              <span> - </span>
              <span
                onClick={() =>
                  navigator.clipboard.writeText(getDateMMYYYY(durations[1]))
                }
              >
                {durations[1]}
              </span>
            </div>
          );
        })()}
      </div>
    </ProjectTitleContainer>
  );
};

export default ProjectTitle;
