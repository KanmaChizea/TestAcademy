import { StyleSheet, useWindowDimensions, View } from 'react-native';
import React from 'react';
import { AppTextStyle, Typography } from '../../shared/Typography';
import { COLORS } from '../../../theme/colors';
import { mockSpendingByCategory } from '../../../data';
import { formatNumber, withOpacity } from '../../../util/formatters';
import { CONSTANTS } from '../../../constants';

export const SpendingCategory = () => {
  const { width: screenWidth } = useWindowDimensions();
  const barWidth = screenWidth - CONSTANTS.screenPadding * 2 - 32;

  const totalSpent = mockSpendingByCategory.reduce(
    (total, item) => total + item.amount,
    0,
  );
  return (
    <View style={styles.container}>
      <Typography textstyle={AppTextStyle.heading7}>
        {'Spending by Category'}
      </Typography>
      <View style={styles.listContainer}>
        {mockSpendingByCategory.map(item => (
          <View key={item.id} style={styles.gap8}>
            <View style={styles.labelRow}>
              <Typography textstyle={AppTextStyle.bodyMediumMedium}>
                {item.label}
              </Typography>
              <Typography
                textstyle={AppTextStyle.bodyMediumMedium}
              >{`₦${formatNumber(item.amount)}`}</Typography>
            </View>
            <View style={[{ width: barWidth }, styles.bar]}>
              <View
                style={[
                  styles.bar,
                  {
                    backgroundColor: COLORS.slate900,
                    width: (item.amount / totalSpent) * barWidth,
                  },
                ]}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    gap: 16,
  },
  listContainer: {
    padding: 16,
    borderRadius: 12,
    gap: 12,
    borderWidth: 1,
    borderColor: COLORS.grey100,
    boxShadow: [
      {
        offsetX: 0,
        offsetY: 1,
        blurRadius: 2,
        color: withOpacity(COLORS.white, 0.05),
      },
    ],
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  gap8: { gap: 8 },
  bar: {
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.grey100,
  },
});
