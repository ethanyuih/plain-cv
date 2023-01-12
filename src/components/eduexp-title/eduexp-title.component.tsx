import React, { FC } from 'react';
import './eduexp-title.styles.scss';

type Props = {
  institute: string;
  job?: string;
  address?: string;
  duration: string;
};

const EduExpTitle: FC<Props> = ({ institute, job, address, duration }) => {
  return (
    <div className='eduexp-container'>
      <div className='institute-info'>
        <h3>{institute}, </h3>
        <span>{job}, </span>
        <span>{address}</span>
      </div>
      <div className='duration'>{duration}</div>
    </div>
  );
};

export default EduExpTitle;
