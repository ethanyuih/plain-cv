import React, { FC } from "react";
import styled from "styled-components";
import { Educations } from "../assets/resume-infos/types";
import PartTitle from "./part-title.component";

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
  justify-content: space-between;
  font-size: 14px;

  div:nth-child(2) {
    font-style: italic;
  }
`;

const InstituteInfo = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;

  span:nth-of-type(2) {
    font-style: italic;
  }
`;

const EducationFC: FC<Props> = ({ educations }) => {
  const { hidden, educationList } = educations;
  if (hidden) return <></>;
  return (
    <div className='education-container'>
      <PartTitle title={"EDUCATIONS"} />
      <EduContainer>
        {educationList.map((education, idx) => {
          const { hidden, university, major, address, duration } = education;
          if (hidden) return <div key={idx}></div>;
          return (
            <EduExpContainer key={idx}>
              <InstituteInfo>
                <h3 onClick={() => navigator.clipboard.writeText(university)}>
                  {university},{" "}
                </h3>
                <span
                  onClick={() =>
                    navigator.clipboard.writeText("Computer Science")
                  }
                >
                  {major}
                </span>
                <span onClick={() => navigator.clipboard.writeText(address)}>
                  {address}
                </span>
              </InstituteInfo>
              <div className='duration'>{duration}</div>
            </EduExpContainer>
          );
        })}
      </EduContainer>
    </div>
  );
};

export default EducationFC;
