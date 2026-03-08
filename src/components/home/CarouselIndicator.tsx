import { StyleSheet, View } from 'react-native';
import React from 'react';
import { COLORS } from '../../theme/colors';

type Props = {
  lenght: number;
  activeIndex: number;
};
export const CarouselIndicator = ({ lenght, activeIndex }: Props) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: lenght }, (_, index) => (
        <View
          key={index}
          style={[styles.bar, index === activeIndex && styles.active]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 2,
  },
  bar: {
    height: 4,
    width: 8,
    borderRadius: 8,
    backgroundColor: COLORS.grey400,
  },
  active: {
    width: 12,
    backgroundColor: COLORS.slate800,
  },
});
