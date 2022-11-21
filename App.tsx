import React from 'react';
import {SafeAreaView} from 'react-native';
import Appearances from './src/Appearance';
import FlatlistAnimation from './src/FlatlistAnimation';
import FlatlistScrollToIndex from './src/FlatlistScrollToIndex';
import LoopingAnimation from './src/LoopingAnimation';
import LottieAnimation from './src/LottieAnimation';
import ScrollView from './src/ScrollView';

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      {/* <Animated /> */}
      {/* <LoopingAnimation /> */}
      {/* <LottieAnimation /> */}
      {/* <FlatlistAnimation /> */}
      {/* <FlatlistScrollToIndex /> */}
      {/* <Appearances /> */}
      <ScrollView />
    </SafeAreaView>
  );
};

export default App;
