import { Button, View, Text } from 'react-native';
import React from 'react';
import { NavigationProps } from '../navigation/RootNavigator';

const CardsScreen: React.FC<NavigationProps> = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('');
  };

  return (
    <View>
      <Text>CardsScreen</Text>
      <Button title="Details" onPress={handlePress} />
    </View>
  );
};

export default CardsScreen;
