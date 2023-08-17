import React from 'react';
import { Menu, Logo, NavBar, ButtonDarkSwitch, MenuPerfil } from './styles'
import logoLight from '../../Assets/Logo/logoLight.png';
//import logoDark from '../../Assets/Logo/logoDark.png';
import buttonLightSwitch from '../../Assets/Button/buttonLightSwitch.png';
//import buttonDarkSwitch from '../../Assets/Button/buttonDarkSwitch.png';
import menuPerfilLight from '../../Assets/MenuPerfil/menuPerfilLight.png';
//import logo from '../../Assets/Logo/logo.png';



export default function Header() {
    return (
    <Menu>
      <Logo src={logoLight}></Logo>
      <NavBar>
      <ButtonDarkSwitch src={buttonLightSwitch}/>
      <MenuPerfil src={menuPerfilLight}/>
      </NavBar>
    </Menu>
    );
  }