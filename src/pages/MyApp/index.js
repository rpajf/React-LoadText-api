import React, { useState, useEffect, useCallback } from 'react';

import Header from '../../components/Header';

import api from '../../services/api';
import MyComponent from '../../components/PageComponent';
import MyText from '../../pages/MyText';
import Button from '../../components/Button';
import { } from '../../components/Button'

import { Container, Section, Content, UsefullLinks } from './styles';




export default function MyApp() {
  const [text, setText] = useState('')

  const [isSending, setIsSending] = useState(false)
  const sendRequest = useCallback(async () => {
    // don't send again while we are sending
    if (isSending) return
    // update state
    setIsSending(true)
    console.log('oi')
    // send the actual request
    await api.get('text')
    // once the request is sent, update state again
    setIsSending(false)
  }, [isSending])








  return (
    <Container>
      <Header />
      <Section>
        <a href="https://www.youtube.com">Link1</a>
        <a href="https://www.youtube.com">Link1</a>
        <a href="https://www.youtube.com">Link1</a>
        <a href="https://www.youtube.com">Link1</a>
      </Section>
      <Content>
      <MyComponent >
        <h2>asdsa</h2>
      </MyComponent>
      <div className="text-comp">
      <Button onClick={sendRequest} >LoadText</Button>
      <MyText>

      </MyText>
      <Button type="button">Text Post Request</Button>
      </div>
      <MyComponent >
        <h2>asdsa</h2>
        <UsefullLinks>
        <p>External links</p>

        </UsefullLinks>
      </MyComponent>
      </Content>
    </Container>
  );
}
