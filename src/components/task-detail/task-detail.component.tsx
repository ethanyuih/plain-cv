import React, { FC } from 'react';
import PlainText from '../plaintext/plaintext.component';
import './task-detail.styles.scss';

type Props = {
  task: string;
};

const TaskDetail: FC<Props> = ({ task }) => {
  return (
    <div className='task-details-container'>
      <div className='para-dot'>
        <span></span>
      </div>
      <div className='text-details'>
        <PlainText text={task} />
      </div>
    </div>
  );
};

export default TaskDetail;
