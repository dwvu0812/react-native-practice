import {View, Text, TextInput, StyleSheet, Keyboard} from 'react-native';
import React, { useEffect, useState } from 'react';

const KeyboardTS = () => {
  const [keyboardStatus, setKeyboardStatus] = useState<string>("");

  useEffect(() => {
    const showSubcription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus("Keyboard Shown")
    })
    const hiddenSubcription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus("Keyboard Hidden")
    })
    return () => {
      showSubcription.remove();
      hiddenSubcription.remove();
    }
  }, []);

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={"Click here..."}/>
      <Text style={styles.status}>{keyboardStatus}</Text>
    </View>
  );
};

export default KeyboardTS;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: '100%'
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#000',
    textAlign: 'center',
  },
  status: {
    padding: 10,
    textAlign: 'center',
  }
});
