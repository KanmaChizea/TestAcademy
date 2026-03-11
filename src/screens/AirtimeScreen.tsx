import { Button, Text, View } from 'react-native';
import React from 'react';
import { NavigationProps } from '../navigation/RootNavigator';

const AirtimeScreen: React.FC<NavigationProps> = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('');
  };
  return (
    <View>
      <Text>AirtimeScreen</Text>
      <Button title="Details" onPress={handlePress} />
    </View>
  );
};

export default AirtimeScreen;
