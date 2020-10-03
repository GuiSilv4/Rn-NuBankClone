import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();
import QRCode from 'react-native-qrcode-svg';

import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles';

const NavItemComponent = (props) => {
  return (
    <NavItem>
      <Icon name={props.icon} size={20} color="#FFF" />
      <NavText>{props.text}</NavText>
    </NavItem>
  );
}
const Menu = ({ translateY }) => {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
      }),
    }}>
      <Code>
        <QRCode
          vaue="https://nubank.com.br/"
          size={80}
          color="#8B10AE"
          backgroundColor="#FFF"
        />
      </Code>
      <Nav>
        <NavItemComponent icon="help-outline" text="Me ajuda"></NavItemComponent>
        <NavItemComponent icon="person-outline" text="Perfil"></NavItemComponent>
        <NavItemComponent icon="credit-card" text="Configurar cartão"></NavItemComponent>
        <NavItemComponent icon="smartphone" text="Configurações do App"></NavItemComponent>
      </Nav>

      <SignOutButton onPress={() => { }}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}

export default Menu;