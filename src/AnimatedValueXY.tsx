import {View, Text, StyleSheet, Animated, PanResponder} from 'react-native';
import React, {useRef} from 'react';

const AnimatedValueXY = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x,
        dy: pan.y,
      },
    ]),
    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: {x: 0, y: 0},
        useNativeDriver: false,
      }).start();
    },
  });
  console.log({panResponder});

  return (
    <View style={styles.container}>
      <Animated.View {...panResponder.panHandlers} style={[pan.getLayout(),styles.box]}></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  box: {
    backgroundColor: '#61dafb',
    width: 80,
    height: 80,
    borderRadius: 4,
  },
});

export default AnimatedValueXY;
