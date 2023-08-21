import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Menu, Logo, NavBar, MenuPerfil } from './styles'
import logoLight from '../../Assets/Logo/logoLight.png';
import logoDark from '../../Assets/Logo/logoDark.svg';
// import buttonSwitchLight from '../../Assets/Button/buttonSwitchLight.svg';
// import buttonSwitchDark from '../../Assets/Button/buttonSwitchDark.svg';
import menuPerfilLight from '../../Assets/MenuPerfil/menuPerfilLight.png';



export default function Header({toggleTheme}) {
    const { colors, tittle } = useContext(ThemeContext);     
  
    return (
    <Menu>
      <Logo src={tittle === 'dark' ? logoDark : logoLight}></Logo>
      <NavBar>
      <Switch
        onChange={toggleTheme}
        checked={tittle === 'dark'}
        handleDiameter={20}
        height={20}
        width={50}
        onColor={colors.bgSwitch}
        offColor= {colors.bgSwitch}
        onHandleColor={colors.buttonSwitch}
        offHandleColor={colors.buttonSwitch}
        activeBoxShadow= {false}
        checkedIcon={<svg width="20" height="20" viewBox="0 -3 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.5 0.875C3.39375 0.875 0.875 3.39375 0.875 6.5C0.875 9.60625 3.39375 12.125 6.5 12.125C9.60625 12.125 12.125 9.60625 12.125 6.5C12.125 6.2125 12.1 5.925 12.0625 5.65C11.45 6.50625 10.45 7.0625 9.3125 7.0625C7.45 7.0625 5.9375 5.55 5.9375 3.6875C5.9375 2.55625 6.49375 1.55 7.35 0.9375C7.075 0.9 6.7875 0.875 6.5 0.875Z" fill="#BB6BD9"/>
                      </svg>}
        uncheckedIcon={<svg width="50" height="25" viewBox="1 -1 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 4.375C5.775 4.375 4.375 5.775 4.375 7.5C4.375 9.225 5.775 10.625 7.5 10.625C9.225 10.625 10.625 9.225 10.625 7.5C10.625 5.775 9.225 4.375 7.5 4.375ZM1.25 8.125H2.5C2.84375 8.125 3.125 7.84375 3.125 7.5C3.125 7.15625 2.84375 6.875 2.5 6.875H1.25C0.90625 6.875 0.625 7.15625 0.625 7.5C0.625 7.84375 0.90625 8.125 1.25 8.125ZM12.5 8.125H13.75C14.0938 8.125 14.375 7.84375 14.375 7.5C14.375 7.15625 14.0938 6.875 13.75 6.875H12.5C12.1562 6.875 11.875 7.15625 11.875 7.5C11.875 7.84375 12.1562 8.125 12.5 8.125ZM6.875 1.25V2.5C6.875 2.84375 7.15625 3.125 7.5 3.125C7.84375 3.125 8.125 2.84375 8.125 2.5V1.25C8.125 0.90625 7.84375 0.625 7.5 0.625C7.15625 0.625 6.875 0.90625 6.875 1.25ZM6.875 12.5V13.75C6.875 14.0938 7.15625 14.375 7.5 14.375C7.84375 14.375 8.125 14.0938 8.125 13.75V12.5C8.125 12.1562 7.84375 11.875 7.5 11.875C7.15625 11.875 6.875 12.1562 6.875 12.5ZM3.74375 2.8625C3.5 2.61875 3.1 2.61875 2.8625 2.8625C2.61875 3.10625 2.61875 3.50625 2.8625 3.74375L3.525 4.40625C3.76875 4.65 4.16875 4.65 4.40625 4.40625C4.64375 4.1625 4.65 3.7625 4.40625 3.525L3.74375 2.8625ZM11.475 10.5938C11.2313 10.35 10.8313 10.35 10.5938 10.5938C10.35 10.8375 10.35 11.2375 10.5938 11.475L11.2563 12.1375C11.5 12.3813 11.9 12.3813 12.1375 12.1375C12.3813 11.8938 12.3813 11.4938 12.1375 11.2563L11.475 10.5938ZM12.1375 3.74375C12.3813 3.5 12.3813 3.1 12.1375 2.8625C11.8938 2.61875 11.4938 2.61875 11.2563 2.8625L10.5938 3.525C10.35 3.76875 10.35 4.16875 10.5938 4.40625C10.8375 4.64375 11.2375 4.65 11.475 4.40625L12.1375 3.74375ZM4.40625 11.475C4.65 11.2313 4.65 10.8313 4.40625 10.5938C4.1625 10.35 3.7625 10.35 3.525 10.5938L2.8625 11.2563C2.61875 11.5 2.61875 11.9 2.8625 12.1375C3.10625 12.375 3.50625 12.3813 3.74375 12.1375L4.40625 11.475Z" fill="#F2C94C"/>
                        </svg>}

      />
      <MenuPerfil src={menuPerfilLight}/>
      </NavBar>
    </Menu>
    );
  }