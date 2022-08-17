import styled, { StyledComponentBase } from 'styled-components';

interface IPopupOverview extends StyledComponentBase<any, object> {
  DateSpan?: any;
}

const PopupOverview: IPopupOverview = styled.div`
  position:absolute;
  
  top: 50%;
  left: 50%;
`;

export default PopupOverview;
