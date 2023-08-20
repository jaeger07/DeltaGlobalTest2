import React ,{ useState}  from "react";
import { GlobalStyled } from './Styles/global';
import  { ThemeProvider } from "styled-components";
import usePersistedState  from './Utils/usePersistedState'
import light from './Styles/Themes/light'
import dark from './Styles/Themes/dark'

import Header from './Components/Header'
import Tasks from "./Components/Tasks"



function App() {
  
  const [theme, setTheme] = usePersistedState('theme', light);
  
  const toggleTheme = () => {
    setTheme(theme.tittle === 'light' ? dark : light);
  };
  

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <Tasks theme={theme} />
      <GlobalStyled/>
    </ThemeProvider>
  );
}

export default App;
