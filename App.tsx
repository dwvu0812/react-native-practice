import React, { useEffect, useRef } from 'react';
import {SafeAreaView, Text, TextInput} from 'react-native';
import AnimatedValueXY from './src/AnimatedValueXY';
import Animation from './src/Animation';
import Appearances from './src/Appearance';
import FlatlistAnimation from './src/FlatlistAnimation';
import FlatlistScrollToIndex from './src/FlatlistScrollToIndex';
import KeyboardTS from './src/Keyboard';
import LinkingURL from './src/LinkingURL';
import LoopingAnimation from './src/LoopingAnimation';
import LottieAnimation from './src/LottieAnimation';
import ScrollView from './src/ScrollView';
import TrackingGesture from './src/TrackingGesture';

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      {/* <Animation/> */}
      {/* <LoopingAnimation /> */}
      {/* <LottieAnimation /> */}
      {/* <FlatlistAnimation /> */}
      {/* <FlatlistScrollToIndex /> */}
      {/* <Appearances /> */}
      {/* <ScrollView /> */}
      {/* <TrackingGesture /> */}
      {/* <AnimatedValueXY /> */}
      {/* <KeyboardTS /> */}
      <LinkingURL />

    </SafeAreaView>
  );
};

export default App;
