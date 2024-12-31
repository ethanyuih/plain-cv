import React, { FC } from "react";

import { ProjectsContainer, ProjectItem } from "./projects.component";
import { Experiences } from "../assets/resume-infos/types";
import PartTitle from "./part-title.component";
import styled from "styled-components";
import pageConfig from "../assets/resume-infos/0-page-setting";
import PlainText from "./plaintext.component";
import { getDateMMYYYY } from "../assets/Utility/Utils";

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
  span {
    font-weight: normal;
    font-style: italic;
  }
`;

const TitleHead = styled.div`
  display: flex;
  justify-content: space-between;
  div:nth-child(1) {
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
        if (hidden) return <div key={idx}></div>;

        return (
          <ProjectItem key={idx}>
            <ExpContainer>
              <InstituteInfo>
                <div onClick={() => navigator.clipboard.writeText(company)}>
                  {company},
                </div>
                <span onClick={() => navigator.clipboard.writeText(address)}>
                  {address}
                </span>
              </InstituteInfo>
            </ExpContainer>

            {titles.map((title, title_idx) => (
              <TitleContainer key={title_idx}>
                <TitleHead>
                  <div
                    onClick={() =>
                      navigator.clipboard.writeText(title.position)
                    }
                  >
                    {title.position}
                  </div>

                  {(() => {
                    const durations = title.duration.split("-");
                    return (
                      <div>
                        <span
                          onClick={() =>
                            navigator.clipboard.writeText(
                              getDateMMYYYY(durations[0]),
                            )
                          }
                        >
                          {durations[0]}
                        </span>
                        <span> - </span>
                        <span
                          onClick={() =>
                            navigator.clipboard.writeText(
                              getDateMMYYYY(durations[1]),
                            )
                          }
                        >
                          {durations[1]}
                        </span>
                      </div>
                    );
                  })()}
                </TitleHead>
                <div
                  onClick={() =>
                    navigator.clipboard.writeText(
                      title.taskList
                        .map((task, task_idx) => `${task_idx + 1}. ${task}\n`)
                        .join(""),
                    )
                  }
                >
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
                </div>
              </TitleContainer>
            ))}
          </ProjectItem>
        );
      })}
    </ProjectsContainer>
  );
};

export default ExperienceFC;
