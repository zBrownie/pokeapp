import React from 'react';
import ReactLoading, { LoadingType } from 'react-loading';

export interface ILoading {
  type?: LoadingType;
  color?: string;
}
const Loading: React.FC<ILoading> = ({ type = 'spin', color = '#232323' }) => {
  return <ReactLoading color={color} height={667} width={375} type={type} />;
};

export default Loading;
