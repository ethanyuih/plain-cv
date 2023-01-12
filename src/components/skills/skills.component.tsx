import { FC } from 'react';
import { Skills } from '../../types';
import PartTitle from '../part-title/part-title.component';
import SkillType from '../skill-type/skill-type.component';
import './skills.styles.scss';
type Props = {
  skills: Skills;
};

const SkillsFC: FC<Props> = ({ skills }) => {
  return (
    <div>
      <PartTitle title='skills' />
      <div>
        {skills.map((skill, idx) => (
          <SkillType key={idx} skillName={skill.skillType} skillItems={skill.skillItems} />
        ))}
      </div>
    </div>
  );
};

export default SkillsFC;
