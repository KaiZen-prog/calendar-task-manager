import React from "react";
import Block from './popup-overview.styled';
import {ITask} from '../../common/interfaces';

interface PopupProps {
  task?: ITask | null;
}

const PopupOverview = ({task}: PopupProps): JSX.Element => {
  return (
    <Block>
      <p>{task?.title}</p>
    </Block>
  );
};

PopupOverview.displayName = 'PopupOverview';

export default PopupOverview;
