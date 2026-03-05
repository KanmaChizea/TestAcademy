import { StyleSheet, View } from 'react-native';
import React from 'react';

type Props = {
  margin?: number;
};

export const Divider = ({ margin = 12 }: Props) => {
  return <View style={[styles.divider, { marginVertical: margin }]} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: 'grey',
  },
});
