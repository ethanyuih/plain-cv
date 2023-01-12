import { FC } from 'react';
import './plaintext.styles.scss';

type Props = {
  text: string;
};

const PlainText: FC<Props> = ({ text }) => {
  return (
    <div className='plain-text-container'>
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
    </div>
  );
};

export default PlainText;
