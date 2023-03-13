import React from "react";
import Block from './button-cross.styled';

interface Props {
  buttonSize: number,
  onButtonClick: (...args: any[]) => void;
}

const ButtonCross: React.FunctionComponent<Props> = props => {
  const {buttonSize, onButtonClick} = props;

  return (
    <Block $buttonSize={buttonSize} type='button' onClick={onButtonClick} aria-label="Закрыть">
      <Block.Icon $buttonSize={buttonSize}/>
      <Block.InteractiveArea/>
    </Block>
  );
};

ButtonCross.displayName = 'ButtonCross';


export default ButtonCross;
