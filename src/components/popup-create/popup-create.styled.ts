import styled, {StyledComponentBase} from 'styled-components';

interface IPopupCreate extends StyledComponentBase<any, object> {
  DateSpan?: any;
}

const PopupCreate: IPopupCreate = styled.div`
  position:absolute;
  
  top: 50%;
  left: 50%;
`;

export default PopupCreate;
