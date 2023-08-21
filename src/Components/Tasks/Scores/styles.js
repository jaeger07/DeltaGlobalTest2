import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 35px;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 15px 50px;
  width: 32%;
  background-color: ${props => props.theme.colors.bgDivCount};
  border-radius: 8px;
  h1{
    color: #2D9CDB;
    text-align: center;
    font-size: 32px;
    line-height: 46px;
  }
  span{
    color: ${props => props.theme.colors.textPCount};
    font-size: 16px;
    text-align: center;
  }
`;