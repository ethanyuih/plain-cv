import { FC } from 'react';
import { Experience } from '../../types';
import EduExpTitle from '../eduexp-title/eduexp-title.component';
import PartTitle from '../part-title/part-title.component';
import TaskDetail from '../task-detail/task-detail.component';
import './experience.styles.scss';

type Props = {
  experiences: Experience[];
};

const ExperienceFC: FC<Props> = ({ experiences }) => (
  <div className='exp-container'>
    <PartTitle title='Experience' />
    {experiences.map((exp, idx) => {
      const { company, position, address, duration, tasks } = exp;
      return (
        <div key={idx} className='exp-detail-container'>
          <EduExpTitle institute={company} job={position} address={address} duration={duration} />

          {tasks.map((task, _idx) => (
            <TaskDetail key={_idx} task={task} />
          ))}
        </div>
      );
    })}
  </div>
);

export default ExperienceFC;
