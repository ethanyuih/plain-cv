import { FC } from "react";
import styled from "styled-components";

import { Projects } from "../assets/resume-infos/types";
import PartTitle from "./part-title.component";
import ProjectTitle from "./project-title.component";
import TaskDetail from "./task-detail.component";
import pageConfig from "../assets/resume-infos/0-page-setting";

type Props = {
  projects: Projects;
};

export const ProjectItem = styled.div``;

export const ProjectsContainer = styled.div`
  ${ProjectItem}:nth-of-type(n+2) {
    margin-top: ${pageConfig.paragraphGap}px;
  }
`;

const ProjectsFC: FC<Props> = ({ projects }) => {
  const { hidden, projectList } = projects;
  if (hidden) return <></>;
  return (
    <ProjectsContainer className='projects-container'>
      <PartTitle title='Projects' />
      {projectList.map((project, idx) => {
        const { hidden, name, githubLink, deployLink, duration, taskList } =
          project;
        if (hidden) return <div key={idx}></div>;
        return (
          // <div key={idx} className='project-item-container'>
          <ProjectItem key={idx}>
            <ProjectTitle
              name={name}
              github={githubLink}
              deploy={deployLink}
              duration={duration}
            />
            <div
              onClick={() =>
                navigator.clipboard.writeText(
                  taskList
                    .map((task, task_idx) => `${task_idx + 1}. ${task}\n`)
                    .join(""),
                )
              }
            >
              {taskList.map((task, _idx) => (
                <TaskDetail key={_idx} task={task} />
              ))}
            </div>
          </ProjectItem>
        );
      })}
    </ProjectsContainer>
  );
};

export default ProjectsFC;
