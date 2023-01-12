import React, { FC } from 'react';

import './part-title.styles.scss';

const PartTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <h2 className='part-title-contailer'>
      {title[0]}
      <span>{title.substring(1)}</span>
    </h2>
  );
};

export default PartTitle;
