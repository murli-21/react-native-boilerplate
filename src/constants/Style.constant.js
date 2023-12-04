//We define common styles for all components here (like we can start with same box in all screens)
import {StyleSheet} from 'react-native';
import {screenWidth} from './Size.constant';

export const StyleConstants = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: screenWidth - 24,
  },
});
