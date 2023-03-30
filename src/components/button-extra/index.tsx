import * as React from 'react';
import Block from './button-extra.styled';

interface Props {
  title: string;
  type?: string;
  handler?: (...args: any[]) => void;
}

const ExtraButton: React.FunctionComponent<Props> = props => {
  const {type, title, handler} = props;

  const buttonType = type === 'submit' ? type : 'button';

  return (
    <Block type={buttonType} onClick={handler}>
      {title}
    </Block>
  )
};

export default ExtraButton;
