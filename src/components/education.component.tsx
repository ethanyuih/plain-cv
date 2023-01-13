import { FC } from 'react';
import { Educations } from '../assets/resume-infos/types';
import EduExpTitle from './eduexp-title.component';
import PartTitle from './part-title.component';

type Props = {
  educations: Educations;
};

const EducationFC: FC<Props> = ({ educations }) => {
  const { hidden, educationList } = educations;
  if (hidden) return <></>;
  return (
    <div className='education-container'>
      <PartTitle title={'EDUCATIONS'} />
      <div className='edus'>
        {educationList.map((education, idx) => {
          const { hidden, university, major, address, duration } = education;
          if (hidden) return <></>;
          return (
            <EduExpTitle
              key={idx}
              institute={university}
              job={major}
              address={address}
              duration={duration}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EducationFC;
