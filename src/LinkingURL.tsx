import {View, Text, Linking, Alert, Button} from 'react-native';
import React, {useCallback} from 'react';

const OpenSettingsButton = ({ children }) => {
    const handlePress = useCallback(async () => {
      // Open the custom settings if the app has one
      await Linking.openSettings();
    }, []);
  
    return <Button title={children} onPress={handlePress} />;
  };

const LinkingURL = () => {
  const supportedURL = 'https://google.com';
  const unsupportedURL = 'slack://open?team=123456';

  return (
    <View>
      <OpenSettingsButton>Open Settings</OpenSettingsButton>
    </View>
  );
};

export default LinkingURL;
