import React, { createContext, useState } from 'react';

export const UserViewContext = createContext();

export const UserViewProvider = ({ children }) => {
  const [view, setView] = useState();

  return (
    <UserViewContext.Provider value={{ view, setView }}>
      {children}
    </UserViewContext.Provider>
  );
};