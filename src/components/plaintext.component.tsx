import { FC } from "react";
import styled from "styled-components";
import pageConfig from "../assets/resume-infos/0-page-setting";

type Props = {
  text: string;
};

const PlainTextContainer = styled.div`
  line-height: ${pageConfig.plainLineHeight}px;
  span {
    font-style: italic;
    //font-size: 14px;
  }
`;

const PlainText: FC<Props> = ({ text }) => {
  const textContent = text.substring(0, text.lastIndexOf("(")).trim();
  const skills = text.substring(
    text.lastIndexOf("(") + 1,
    text.lastIndexOf(")"),
  );
  return (
    <PlainTextContainer>
      {/*{text}*/}
      {textContent}
      <span> ({skills})</span>
      {/*{text.split(' ').map((word, idx) => {*/}
      {/*  if (word[0] === '#' && word[word.length - 1] === '#') {*/}
      {/*    return (*/}
      {/*      <strong key={idx}>*/}
      {/*        {word.substring(1, word.length - 1)}*/}
      {/*        {` `}*/}
      {/*      </strong>*/}
      {/*    );*/}
      {/*  }*/}

      {/*  if (word[0] === '^' && word[word.length - 1] === '^') {*/}
      {/*    return (*/}
      {/*      <em key={idx}>*/}
      {/*        {word.substring(1, word.length - 1)}*/}
      {/*        {` `}*/}
      {/*      </em>*/}
      {/*    );*/}
      {/*  }*/}

      {/*  return (*/}
      {/*    <span key={idx}>*/}
      {/*      {word}*/}
      {/*      {` `}*/}
      {/*    </span>*/}
      {/*  );*/}
      {/*})}*/}
    </PlainTextContainer>
  );
};

export default PlainText;
