import React, { FC } from 'react';
import styled from 'styled-components';

const PartTitleContainer = styled.h2`
  width: 100%;
  font-size: 18px;
  text-transform: uppercase;
  padding-bottom: 4px;
  margin-bottom: 6px;
  border-bottom: 1px solid black;
  span {
    font-size: 14px;
  }
`;

const PartTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <PartTitleContainer>
      {title[0]}
      <span>{title.substring(1)}</span>
    </PartTitleContainer>
  );
};

export default PartTitle;
