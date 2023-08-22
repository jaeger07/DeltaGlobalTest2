import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 35px;

  @media (max-width: 600px) {
    justify-content: space-around;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  @media (max-width: 340px) {
    flex-direction: column;
    align-items:center;
} 
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 15px 0;
  width: 32%;
  min-width: 170px;
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

  @media (max-width: 600px) {

    &:first-child{
      display: none;
    }
  }
  @media (max-width: 420px) {
    min-width: 140px;
    h1{
    font-size: 28px;
    line-height: 46px;
  }
  span{
    font-size: 12px;
  } 
}
@media (max-width: 340px) {
    
      margin-bottom: 10px;
} 
`;