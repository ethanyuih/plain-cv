import { FC } from 'react';
import { Skills } from '../assets/resume-infos/types';
import PartTitle from './part-title.component';
import SkillType from './skill-type.component';
type Props = {
  skills: Skills;
};

const SkillsFC: FC<Props> = ({ skills }) => {
  const { hidden, skillList } = skills;
  if (hidden) return <></>;
  return (
    <div>
      <PartTitle title='skills' />
      <div>
        {skillList.map((skill, idx) => (
          <SkillType key={idx} skillName={skill.skillType} skillItems={skill.skillItems} />
        ))}
      </div>
    </div>
  );
};

export default SkillsFC;
