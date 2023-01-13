import { FC } from 'react';
import { Patents } from '../assets/resume-infos/types';
import PartTitle from './part-title.component';
import PlainText from './plaintext.component';

type Props = {
  patents: Patents;
};

const PatentFC: FC<Props> = ({ patents }) => {
  const { hidden, patentList } = patents;
  if (hidden) return <></>;
  return (
    <div>
      <PartTitle title='Patent' />
      {patentList.map((patent, idx) => (
        <PlainText text={patent} key={idx} />
      ))}
    </div>
  );
};

export default PatentFC;
