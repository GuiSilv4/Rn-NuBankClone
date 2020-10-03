import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import { CardHeader, CardContent, CardFooter, Title, Annotation, Description } from './styles';

const Card = (props) => {
  return (
    <>
      <CardHeader>
        <Icon name="attach-money" size={28} color="#666" />
        <Icon name="visibility-off" size={28} color="#666" />
      </CardHeader>
      <CardContent>
        <Title>Saldo disponível</Title>
        <Description>R$ 197.611,65</Description>
      </CardContent>
      <CardFooter>
        <Annotation>
          Tranferência de R$ 20,00 recebida de Diego Schell Fernandes hoje às 06:00h
        </Annotation>
      </CardFooter>
    </>
  );
}

export default Card;