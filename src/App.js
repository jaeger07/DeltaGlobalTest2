import React from "react";
import { GlobalStyled } from './Styles/global';

import Header from './Components/Header'
import Tasks from "./Components/Tasks"

function App() {
  return (
    <>
      <Header />
      <Tasks/>
      <GlobalStyled/>
    </>
  );
}

export default App;
