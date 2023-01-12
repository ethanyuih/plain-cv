import { FC } from 'react';
import { Education } from '../../types';
import EduExpTitle from '../eduexp-title/eduexp-title.component';
import PartTitle from '../part-title/part-title.component';
import './education.styles.scss';

type Props = {
  educations: Education[];
};

const EducationFC: FC<Props> = ({ educations }) => {
  return (
    <div className='education-container'>
      <PartTitle title={'EDUCATIONS'} />
      <div className='edus'>
        {educations.map((education, idx) => {
          const { university, major, address, duration } = education;
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
