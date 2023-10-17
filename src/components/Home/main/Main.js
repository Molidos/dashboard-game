import React, { useContext, useEffect, useState } from 'react';
import { Container } from './style';
import { UserPanel } from '../pagesMain/userPanel/UserPanel';
import { UserViewContext } from '../../../context/userViewContext';

export const Main = () => {
  const { view, setView } = useContext(UserViewContext);

  useEffect(() => {
    setView(<UserPanel />);
  }, []);

  return (
    <Container>
      {view}
    </Container>
  );
};