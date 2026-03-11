import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { mockAccounts } from '../../../data';
import { formatNumber, withOpacity } from '../../../util/formatters';
import { AppTextStyle, Typography } from '../../shared/Typography';
import { Icons } from '../../../theme/icons';
import { COLORS } from '../../../theme/colors';

export const TotalBalanceCard = () => {
  const totalBalance = mockAccounts.reduce(
    (prev, current) => prev + current.balance,
    0,
  );
  return (
    <View style={styles.container}>
      <View style={styles.balanceRow}>
        <Typography
          textstyle={AppTextStyle.bodySmall}
          color={withOpacity(COLORS.white, 0.8)}
        >
          {'Total Balance'}
        </Typography>
        <TouchableOpacity>
          <Icons.Eye />
        </TouchableOpacity>
      </View>
      <Typography
        color={COLORS.white}
        textstyle={AppTextStyle.heading3}
      >{`₦${formatNumber(totalBalance)}`}</Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: withOpacity(COLORS.white, 0.2),
    borderRadius: 16,
    backgroundColor: withOpacity(COLORS.white, 0.1),
  },
  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
