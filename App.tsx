import React from 'react';
import {SafeAreaView} from 'react-native';
import FlatlistAnimation from './src/FlatlistAnimation';
import LoopingAnimation from './src/LoopingAnimation';
import LottieAnimation from './src/LottieAnimation';

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      {/* <Animated /> */}
      {/* <LoopingAnimation /> */}
      {/* <LottieAnimation /> */}
      <FlatlistAnimation />
    </SafeAreaView>
  );
};

export default App;
