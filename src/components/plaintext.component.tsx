import { FC } from 'react';
import styled from 'styled-components';
import { experienceInfo } from '../assets/resume-infos/4-experience-info';
import pageConfig from '../assets/resume-infos/0-page-setting';

type Props = {
  text: string;
};

const PlainTextContainer = styled.div`
  line-height: ${pageConfig.plainLineHeight}px;
`;

const PlainText: FC<Props> = ({ text }) => {
  // 使用正则表达式匹配 **text** 格式的内容
  const pattern = /\*\*([^*]+)\*\*/g;

  // 将文本分割成普通文本和需要加粗的部分
  const parts = text.split(pattern);

  return (
    <PlainTextContainer>
      {parts.map((part, index) => {
        const shouldBeBold = index % 2 === 1;
        return shouldBeBold ? <strong key={index}>{part}</strong> : part;
      })}
    </PlainTextContainer>
  );
};

export default PlainText;
// {/*{text.split(' ').map((word, idx) => {*/}
// {/*  if (word[0] === '#' && word[word.length - 1] === '#') {*/}
// {/*    return (*/}
// {/*      <strong key={idx}>*/}
// {/*        {word.substring(1, word.length - 1)}*/}
// {/*        {` `}*/}
// {/*      </strong>*/}
// {/*    );*/}
// {/*  }*/}
//
// {/*  if (word[0] === '^' && word[word.length - 1] === '^') {*/}
// {/*    return (*/}
// {/*      <em key={idx}>*/}
// {/*        {word.substring(1, word.length - 1)}*/}
// {/*        {` `}*/}
// {/*      </em>*/}
// {/*    );*/}
// {/*  }*/}
//
// {/*  return (*/}
// {/*    <span key={idx}>*/}
// {/*      {word}*/}
// {/*      {` `}*/}
// {/*    </span>*/}
// {/*  );*/}
// {/*})}*/}
