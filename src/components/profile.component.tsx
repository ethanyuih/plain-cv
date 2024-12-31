import { FC } from "react";
import { AiFillPhone, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import styled from "styled-components";

import type { Profile } from "../assets/resume-infos/types";

type Props = {
  profile: Profile;
};

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5px;

  h1 > span {
    font-size: 26px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  font-size: small;
  gap: 3px;
  margin-top: 4px;

  .profile-icon {
    color: black;
    font-size: 20px;
  }

  a {
    display: flex;
    align-items: center;
    gap: 5px;
    color: black;
    font-weight: semibold;
    margin-right: 5px;

    span {
      border-bottom: solid gray 1px;
    }
  }
`;

const ProfileFC: FC<Props> = ({ profile }) => {
  const {
    firstName,
    lastName,
    preferredName,
    phone,
    homeStreet,
    homeCity,
    homeState,
    homeZip,
    email,
    linkedin,
    github,
    address,
  } = profile;

  return (
    <ProfileContainer>
      <h1>
        <span onClick={() => navigator.clipboard.writeText(firstName)}>
          {preferredName}
        </span>
        <span onClick={() => navigator.clipboard.writeText(preferredName)}>
          {" "}
        </span>
        <span onClick={() => navigator.clipboard.writeText(lastName)}>
          {lastName}
        </span>
      </h1>
      {address !== "" && (
        <p>
          {(() => {
            const addressArr = address.split(",");
            return (
              <>
                <span onClick={() => navigator.clipboard.writeText(homeStreet)}>
                  {addressArr[0]}
                </span>
                <span onClick={() => navigator.clipboard.writeText(homeCity)}>
                  ,{" "}
                </span>
                <span onClick={() => navigator.clipboard.writeText(homeState)}>
                  {addressArr[1]}
                </span>
              </>
            );
          })()}
        </p>
      )}
      <ContactInfo>
        <AiFillPhone
          className='profile-icon'
          onClick={() => {
            const cleaned = phone.replace(/\D/g, "");
            const cleanedPhone = `(${cleaned.slice(0, 3)})${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
            navigator.clipboard.writeText(cleanedPhone);
          }}
        />
        <a href={`tel:${phone}`}>
          <span>{phone}</span>
        </a>
        {/*<span>|</span>*/}
        <MdEmail
          className='profile-icon'
          onClick={() => navigator.clipboard.writeText(email)}
        />
        <a href={`mailto:${email}`}>
          <span>{email}</span>
        </a>
        {/*<span>|</span>*/}
        <AiFillLinkedin
          className='profile-icon'
          onClick={() => navigator.clipboard.writeText(linkedin)}
        />
        <a href={linkedin}>
          <span>{linkedin.substring(linkedin.indexOf("linkedin"))}</span>
        </a>
        {/*<span>|</span>*/}
        <AiFillGithub
          className='profile-icon'
          onClick={() => navigator.clipboard.writeText(github)}
        />
        <a href={github}>
          <span>{github.substring(github.indexOf("github"))}</span>
        </a>
      </ContactInfo>
    </ProfileContainer>
  );
};

export default ProfileFC;
