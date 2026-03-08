import { StyleSheet, View } from 'react-native';
import React from 'react';
import { AppTextStyle, Typography } from '../shared/Typography';
import { Icons } from '../../theme/icons';
import { COLORS } from '../../theme/colors';
import { CONSTANTS } from '../../constants';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Typography textstyle={AppTextStyle.heading8} style={styles.fill}>
        {'TechStore'}
      </Typography>
      <Icons.Search />
      <Icons.Bag />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: CONSTANTS.screenPadding,
    flexDirection: 'row',
    gap: 18,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey100,
    boxShadow: [
      {
        offsetX: 0,
        offsetY: 1,
        spreadDistance: 0,
        blurRadius: 3,
        color: '#0000000D',
      },
    ],
  },
  fill: {
    flex: 1,
  },
});
