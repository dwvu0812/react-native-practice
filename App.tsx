import React from 'react';
import {SafeAreaView} from 'react-native';
import LoopingAnimation from './src/LoopingAnimation';

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
      <LoopingAnimation />
    </SafeAreaView>
  );
};

export default App;
