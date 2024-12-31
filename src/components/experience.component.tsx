import React, { FC } from "react";

import { ProjectsContainer, ProjectItem } from "./projects.component";
import { Experiences } from "../assets/resume-infos/types";
import PartTitle from "./part-title.component";
import styled from "styled-components";
import pageConfig from "../assets/resume-infos/0-page-setting";
import PlainText from "./plaintext.component";

type Props = {
  experiences: Experiences;
};

const ExpContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;

  div:nth-child(2) {
    font-style: italic;
  }
`;

const InstituteInfo = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;

  div:nth-of-type(1) {
    font-weight: bold;
  }

  span:nth-of-type(2) {
    font-style: italic;
  }
`;

const ParaDot = styled.div`
  flex: 1;
  height: 100%;
  position: relative;

  span {
    position: absolute;
    transform: translateY(6px) translateX(5px);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #000;
  }
`;

const TextDetails = styled.div`
  flex: 35;
`;

const TaskDetailContainer = styled.div`
  display: flex;
  margin: ${pageConfig.taskGap}px 0;
`;

const TitleContainer = styled.div`
  //display: flex;
  //justify-content: space-between;
  //font-size: 14px;
`;

const TitleHead = styled.div`
  display: flex;
  justify-content: space-between;
  span:nth-child(1) {
    font-weight: bold;
  }
  span:nth-child(2) {
    font-style: italic;
  }
`;

const ExperienceFC: FC<Props> = ({ experiences }) => {
  const { hidden, experienceList } = experiences;
  if (hidden) return <></>;
  return (
    <ProjectsContainer>
      <PartTitle title='Experience' />
      {experienceList.map((exp, idx) => {
        const { hidden, company, address, titles } = exp;
        if (hidden) return <></>;

        return (
          <ProjectItem key={idx}>
            <ExpContainer>
              <InstituteInfo>
                <div>{company}, </div>
                <span>{address}</span>
              </InstituteInfo>
            </ExpContainer>

            {titles.map((title, title_idx) => (
              <TitleContainer key={title_idx}>
                <TitleHead>
                  <span>{title.position}</span>
                  <span>{title.duration}</span>
                </TitleHead>
                {title.taskList.map((task, task_idx) => (
                  <TaskDetailContainer key={task_idx}>
                    <ParaDot>
                      <span></span>
                    </ParaDot>
                    <TextDetails>
                      <PlainText text={task} />
                    </TextDetails>
                  </TaskDetailContainer>
                ))}
              </TitleContainer>
            ))}
          </ProjectItem>
        );
      })}
    </ProjectsContainer>
  );
};

export default ExperienceFC;
