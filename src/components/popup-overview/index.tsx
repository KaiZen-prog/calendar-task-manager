import React from "react";
import Block from './popup-overview.styled';
import {ITask} from '../../common/interfaces';

interface PopupProps {
  task: ITask | null;
}

const PopupOverview: React.FunctionComponent<PopupProps> = props => {
  return (
    <Block>
      <p>{props.task?.title}</p>
    </Block>
  );
};

PopupOverview.displayName = 'PopupOverview';

export default PopupOverview;
