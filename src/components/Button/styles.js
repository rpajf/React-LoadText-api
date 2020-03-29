import styled from 'styled-components';


export const MyButton = styled.button`
  width: 112px;
  height: 36px;
  background: #7d40e7;
  color: #fff;
  font-size: 16px;
  border-radius: 4px;
  font-weight: 500;
  :nth-child(n+2) {
    margin-top: 30px;
    width: 120px;
    height: 42px;
  }
  :hover{
    opacity: 0.85
  }
`;
