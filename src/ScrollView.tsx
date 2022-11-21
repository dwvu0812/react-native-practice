import {View, Text, StyleSheet, ScrollView, Button} from 'react-native';
import React, {useRef} from 'react';

const ScrollViewRN = () => {
  //   let scrollRef = useRef();
  const scrollRef = React.createRef<ScrollView>();
  return (
    <>
      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal>
        <View style={{width: 200, height: 200, backgroundColor: 'red'}}></View>
        <View
          style={{width: 200, height: 200, backgroundColor: 'green'}}></View>
        <View style={{width: 200, height: 200, backgroundColor: 'blue'}}></View>
        <View style={{width: 200, height: 200, backgroundColor: 'gray'}}></View>
        <View style={{width: 200, height: 200, backgroundColor: 'cyan'}}></View>
        <View style={{width: 200, height: 200, backgroundColor: 'red'}}></View>
        <View
          style={{width: 200, height: 200, backgroundColor: 'green'}}></View>
        <View style={{width: 200, height: 200, backgroundColor: 'blue'}}></View>
        <View style={{width: 200, height: 200, backgroundColor: 'gray'}}></View>
        <View style={{width: 200, height: 200, backgroundColor: 'cyan'}}></View>
      </ScrollView>
      <Button
        title="Scroll"
        onPress={() => {
          console.log('scroll---------------');
          return scrollRef.current?.scrollTo({x: 100, y: 0, animated: true});
        }}
      />
    </>
  );
};

export default ScrollViewRN;

const styles = StyleSheet.create({});
