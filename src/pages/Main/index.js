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
  let offset = 0;
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
    //if para verificar se parou a animacao (pangesture)
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      //verifica onde soltou a box do card
      const { translationY } = event.nativeEvent;
      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });

    }
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
      <Tabs translateY={translateY} />
    </Container>
  );
}

export default Main;