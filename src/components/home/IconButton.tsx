import { StyleSheet, View } from 'react-native';
import React from 'react';

type Props = {
  icon: React.ReactElement;
  onPress?: () => void;
  size?: number;
  borderWidth?: number;
};
export const IconButton = ({ icon, size = 40, borderWidth = 1 }: Props) => {
  return (
    <View
      style={[
        styles.container,
        { width: size, height: size, borderRadius: size / 2, borderWidth },
      ]}
    >
      {icon}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF1A',
    borderColor: '#FFFFFF33',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
