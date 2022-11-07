import * as React from 'react';
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView,
} from 'react-native';
import {faker} from '@faker-js/faker';

const {width, height} = Dimensions.get('screen');

faker.seed(10);
const DATA = [...Array(30).keys()].map((_, i) => {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
});

const BG_IMG =
  'https://www.pexels.com/photo/pink-rose-closeup-photography-1231265/';

const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

export default () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar hidden />
      <Image source={{uri: BG_IMG}} style={StyleSheet.absoluteFillObject} />
      <Animated.FlatList
        data={DATA}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        keyExtractor={item => item.userId}
        contentContainerStyle={{
          padding: SPACING,
          paddingTop: StatusBar.currentHeight || 42,
        }}
        renderItem={({item, index}) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];
          const opacityInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];
          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0.5],
          });
          const opacity = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [1, 1, 1, 0.5],
          });
          return (
            <Animated.View
              style={{
                flexDirection: 'row',
                padding: SPACING,
                marginBottom: SPACING,
                borderRadius: 12,
                backgroundColor: '#fff',
                // shadowColor: '#000',
                // shadowOffset: {
                //   width: 0,
                //   height: 2,
                // },
                // shadowOpacity: 0.25,
                // shadowRadius: 3.84,
                elevation: 5,
                transform: [{scale}],
                opacity
              }}>
              <Image
                source={{uri: item.avatar}}
                style={{
                  width: AVATAR_SIZE,
                  height: AVATAR_SIZE,
                  borderRadius: AVATAR_SIZE,
                  marginRight: SPACING,
                }}
              />
              <View>
                <Text style={{fontSize: 22, fontWeight: '700', color: '#000'}}>
                  {item.username}
                </Text>
                <Text style={{fontSize: 18}}>{item.email}</Text>
              </View>
            </Animated.View>
          );
        }}
      />
    </View>
  );
};
