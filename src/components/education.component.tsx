import React, { FC } from 'react';
import styled from 'styled-components';
import { Educations } from '../assets/resume-infos/types';
import PartTitle from './part-title.component';

type Props = {
  educations: Educations;
};

const EduContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding-bottom: 3px;
`;

const EduExpContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  .education {
    display: flex;
    justify-content: space-between;
    span {
      font-style: italic;
    }
  }

  .major-info {
    display: flex;
    justify-content: space-between;
    //font-style: italic;
    div {
      font-style: italic;
    }
  }
`;

const EducationFC: FC<Props> = ({ educations }) => {
  const { hidden, educationList } = educations;
  if (hidden) return <></>;
  return (
    <div className='education-container'>
      <PartTitle title={'EDUCATIONS'} />
      <EduContainer>
        {educationList.map((education, idx) => {
          const { hidden, university, major, address, duration } = education;
          if (hidden) return <div key={idx}></div>;
          return (
            <EduExpContainer key={idx}>
              <div className='education'>
                <h3 onClick={() => navigator.clipboard.writeText(university)}>{university} </h3>
                <span onClick={() => navigator.clipboard.writeText(address)}>{address}</span>
              </div>
              <div className='major-info'>
                <span onClick={() => navigator.clipboard.writeText('Computer Science')}>
                  {major}
                </span>
                <div className='duration'>{duration}</div>
              </div>
            </EduExpContainer>
          );
        })}
      </EduContainer>
    </div>
  );
};

export default EducationFC;
