import { FC } from 'react';
import { Project } from '../../types';
import EduExpTitle from '../eduexp-title/eduexp-title.component';
import PartTitle from '../part-title/part-title.component';
import ProjectTitle from '../project-title/project-title.component';
import TaskDetail from '../task-detail/task-detail.component';
import './projects.styles.scss';

type Props = {
  projects: Project[];
};

const ProjectsFC: FC<Props> = ({ projects }) => {
  return (
    <div className='projects-container'>
      <PartTitle title='Projects' />
      {projects.map((project, idx) => {
        const { name, github, deploy, duration, tasks } = project;
        return (
          <div key={idx} className='project-item-container'>
            <ProjectTitle name={name} github={github} deploy={deploy} duration={duration} />
            {tasks.map((task, _idx) => (
              <TaskDetail key={_idx} task={task} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsFC;
