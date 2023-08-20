import styled from "styled-components";

export const Menu = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5vw;
  width: 100vw;
  height: 68px;
  border-bottom: 1px solid ${props => props.theme.colors.borderHeader};
`;
export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 150px;
  height: 68px;
`;

export const Logo = styled.img`
  max-width: 180px;
  height: auto;
`;
export const ButtonThemeSwitch = styled.img`
  margin: 0 10px;
  max-width: 30px;
  height: auto;
`;
export const MenuPerfil = styled.img`
  max-width: 80px;
  margin-left: 30px;
  height: auto;
`;