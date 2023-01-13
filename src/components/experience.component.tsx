import { FC } from 'react';

import { ProjectsContainer, ProjectItem } from './projects.component';
import { Experiences } from '../assets/resume-infos/types';
import EduExpTitle from './eduexp-title.component';
import PartTitle from './part-title.component';
import TaskDetail from './task-detail.component';

type Props = {
  experiences: Experiences;
};

const ExperienceFC: FC<Props> = ({ experiences }) => {
  const { hidden, experienceList } = experiences;
  if (hidden) return <></>;
  return (
    <ProjectsContainer>
      <PartTitle title='Experience' />
      {experienceList.map((exp, idx) => {
        const { hidden, company, position, address, duration, taskList } = exp;
        if (hidden) return <></>;
        return (
          <ProjectItem>
            <EduExpTitle institute={company} job={position} address={address} duration={duration} />

            {taskList.map((task, _idx) => (
              <TaskDetail key={_idx} task={task} />
            ))}
          </ProjectItem>
        );
      })}
    </ProjectsContainer>
  );
};

export default ExperienceFC;
