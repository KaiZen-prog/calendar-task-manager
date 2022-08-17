import * as React from 'react';
import {useState} from 'react';

const WithTaskPopup = (WrappedComponent: React.ElementType) => {
  const [isPopupOpened, setPopupOpen] = useState(false);

  const onPopupOpening = () => {
    setPopupOpen(true);
  };

  return (
    <WrappedComponent
      isPopupOpened={isPopupOpened}
      onPopupOpening={onPopupOpening}
    />
  );
};

export default WithTaskPopup;
