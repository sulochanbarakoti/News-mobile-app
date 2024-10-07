import React, { createContext } from "react";

const NewsContext = createContext();

const GlobalContext = ({ children }) => {
  return <NewsContext.Provider>{children}</NewsContext.Provider>;
};

export default GlobalContext;
