import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Animated } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #8B10AE;
  padding-top: ${getStatusBarHeight()}px;
  justify-content: center;
`;
export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
  `;


export const CardContainer = styled(Animated.View)`
  flex: 1;
  background: #FFF;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0px;
`;
