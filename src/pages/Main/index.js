import React from 'react';
import { StatusBar } from 'react-native';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Card from '../../components/Card';
import Menu from '../../components/Menu';
import { Container, Content, CardContainer } from './styles';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

const Main = () => {
  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        }
      }
    ],
    {
      useNativeDriver: true
    }
  );

  const onHandlerStateChanged = (event) => {

  }

  return (
    <Container>
      <StatusBar barStyle='light-content' backgroundColor="#8B10AE"></StatusBar>
      <Header />
      <Content>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <CardContainer style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 380],
                outputRange: [-50, 0, 380],
                extrapolate: 'clamp'
              }),
            }]
          }} >
            <Card />
          </CardContainer>
        </PanGestureHandler>
      </Content>
      <Tabs />
    </Container>
  );
}

export default Main;