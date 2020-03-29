import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  height: 120px;

`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  border-bottom: solid 1px #9999;
  

  img {
    width: 100px;
    max-height: 120px;
    margin-left: 30px;

    justify-self: flex-start;
    padding-bottom: 30px;
  }
  h1 {
    margin-left: 450px;
    justify-self: center;
    align-self: center;
  }


`