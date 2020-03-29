import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100vh;
  display: flex;
  flex-direction: column;


`;
export const Content = styled.div`
  margin: 20px auto;
  justify-content: space-between;




  display: flex;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  .text-comp{
    display: flex;

    flex-direction: column;
    align-items: center;
    flex: 1;
    button {
      align-self: flex-start;
      margin-bottom: 12px;
      margin-left: 12px

    }
  }
`

export const Section = styled.div`
  align-self: center;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 95%;
  height: 80px;
  border: 1px solid #9999;
  border-radius: 4px;
  a {
    margin: 15px;
  }
`

export const Components = styled.div`
  display: flex;



`

export const UsefullLinks = styled.div`
  margin-top: 300px;
  background: #fff;
  display: flex;
  width: 100%;
  max-width: 550px;
  height: 200px;
  border: 1px solid #9999;
  justify-content: center;



`