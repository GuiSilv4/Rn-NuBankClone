import React from 'react';
import { Container, TabsContainer, TabItems, TabText } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

const TabItem = (props) => {
  return (
    <TabItems>
      <Icon name={props.name} size={24} color="#FFF" />
      <TabText>{props.text}</TabText>
    </TabItems>
  );
}

const Tabs = () => {
  const tabItems = [
    { name: "person-add", text: "Indicar-amigos" },
    { name: "chat-bubble-outline", text: "Cobrar" },
    { name: "arrow-downward", text: "Depositar" },
    { name: "arrow-upward", text: "Trasnferir" },
    { name: "lock", text: "Bloquear Cartão" }];

  return (
    <Container>
      <TabsContainer>
        {tabItems.map(({ name, text }, index) => <TabItem key={index} name={name} text={text} />)}
      </TabsContainer>
    </Container>
  );
}

export default Tabs;