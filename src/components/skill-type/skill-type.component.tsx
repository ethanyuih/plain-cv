import { FC } from 'react';

import './skill-type.styles.scss';
const SkillType: FC<{ skillName: string; skillItems: string[] }> = ({ skillName, skillItems }) => {
  return (
    <div className='skill-type'>
      <h3>{`${skillName}:`}</h3>
      <p>
        {skillItems.map((item, idx) => (
          <span key={idx}>
            {item}
            {idx === skillItems.length - 1 ? '' : ', '}
          </span>
        ))}
      </p>
    </div>
  );
};

export default SkillType;
