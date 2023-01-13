import { FC } from 'react';
import styled from 'styled-components';
import pageConfig from '../assets/resume-infos/0-page-setting';

type Props = {
  text: string;
};

const PlainTextContainer = styled.div`
  line-height: ${pageConfig.plainLineHeight}px;
`;

const PlainText: FC<Props> = ({ text }) => {
  return (
    <PlainTextContainer>
      {text.split(' ').map((word, idx) => {
        if (word[0] === '#' && word[word.length - 1] === '#') {
          return (
            <strong key={idx}>
              {word.substring(1, word.length - 1)}
              {` `}
            </strong>
          );
        }

        if (word[0] === '^' && word[word.length - 1] === '^') {
          return (
            <em key={idx}>
              {word.substring(1, word.length - 1)}
              {` `}
            </em>
          );
        }

        return (
          <span key={idx}>
            {word}
            {` `}
          </span>
        );
      })}
    </PlainTextContainer>
  );
};

export default PlainText;
