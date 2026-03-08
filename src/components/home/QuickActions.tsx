import { FlatList, StyleSheet, useWindowDimensions, View } from 'react-native';
import React from 'react';
import { Icons } from '../../theme/icons';
import { AppTextStyle, Typography } from '../shared/Typography';
import { COLORS } from '../../theme/colors';
import { CONSTANTS } from '../../constants';
import { withOpacity } from '../../util/formatters';

const SPACING = 20;
const NUM_COLUMNS = 4;
export const QuickActions = () => {
  const { width: screenWidth } = useWindowDimensions();
  const itemWidth =
    (screenWidth - CONSTANTS.screenPadding * 2 - SPACING * (NUM_COLUMNS - 1)) /
    NUM_COLUMNS;
  const items = [
    { label: 'Transfer', icon: <Icons.Send /> },
    { label: 'Airtime', icon: <Icons.Device /> },
    { label: 'Data', icon: <Icons.Wifi /> },
    { label: 'Bills', icon: <Icons.CreditCard /> },
    { label: 'Loans', icon: <Icons.Building /> },
    { label: 'Cards', icon: <Icons.CreditCard /> },
    { label: 'QR Pay', icon: <Icons.QrCode /> },
  ];
  return (
    <FlatList
      data={items}
      scrollEnabled={false}
      keyExtractor={item => item.label}
      renderItem={({ item }) => (
        <View style={[styles.container, { width: itemWidth }]}>
          <View style={styles.icon}>{item.icon}</View>
          <Typography textstyle={AppTextStyle.bodyTiny} color={COLORS.grey600}>
            {item.label}
          </Typography>
        </View>
      )}
      numColumns={NUM_COLUMNS}
      columnWrapperStyle={styles.columnWrapper}
      contentContainerStyle={styles.gap12}
      style={styles.overlap}
    />
  );
};

const styles = StyleSheet.create({
  columnWrapper: {
    gap: SPACING,
    paddingHorizontal: CONSTANTS.screenPadding,
  },
  container: {
    padding: 12,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 11,
    backgroundColor: COLORS.white,
    boxShadow: [
      {
        offsetX: 0,
        offsetY: 10,
        blurRadius: 15,
        spreadDistance: -3,
        color: withOpacity(COLORS.white, 0.1),
      },
      {
        offsetX: 0,
        offsetY: 4,
        blurRadius: 6,
        spreadDistance: -4,
        color: withOpacity(COLORS.white, 0.1),
      },
    ],
  },
  icon: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: COLORS.grey100,
  },
  gap12: {
    gap: 12,
  },
  overlap: { marginTop: -80 },
});
