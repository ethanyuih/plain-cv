import { FC } from 'react';
import { AiFillPhone, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

import type { Profile } from '../../types';

import './profile.styles.scss';

type Props = {
  profile: Profile;
};

const ProfileFC: FC<Props> = ({ profile }) => {
  const { name, phone, email, linkedin, github, address } = profile;

  return (
    <div className='profile-container'>
      <h1>{name}</h1>
      <p>{address}</p>
      <div className='contact-info'>
        <a href={`tel:${phone}`}>
          <AiFillPhone className='profile-icon' />
          <span>{phone}</span>
        </a>
        <a href={`mailto:${email}`}>
          <MdEmail className='profile-icon' />
          <span>{email}</span>
        </a>

        <a href={linkedin}>
          <AiFillLinkedin className='profile-icon' />
          <span>{linkedin.substring(linkedin.indexOf('linkedin'))}</span>
        </a>

        <a href={github}>
          <AiFillGithub className='profile-icon' />
          <span>{github.substring(github.indexOf('github'))}</span>
        </a>
      </div>
    </div>
  );
};

export default ProfileFC;
