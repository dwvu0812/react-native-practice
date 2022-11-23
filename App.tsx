import React, { useEffect, useRef } from 'react';
import {SafeAreaView, Text, TextInput} from 'react-native';
import Animation from './src/Animation';
import Appearances from './src/Appearance';
import FlatlistAnimation from './src/FlatlistAnimation';
import FlatlistScrollToIndex from './src/FlatlistScrollToIndex';
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
      <TrackingGesture />

    </SafeAreaView>
  );
};

export default App;
