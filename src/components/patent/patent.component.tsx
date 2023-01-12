import { FC } from 'react';
import PartTitle from '../part-title/part-title.component';
import PlainText from '../plaintext/plaintext.component';
import './patent.styles.scss';

type Props = {
  patents: string[];
};

const PatentFC: FC<Props> = ({ patents }) => {
  return (
    <div>
      <PartTitle title='Patent' />
      {patents.map((patent, idx) => (
        <PlainText text={patent} key={idx} />
      ))}
    </div>
  );
};

export default PatentFC;
