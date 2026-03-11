import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { AppTextStyle, Typography } from '../../shared/Typography';
import { mockTransactions } from '../../../data';
import { COLORS } from '../../../theme/colors';
import {
  formatDate,
  formatNumber,
  withOpacity,
} from '../../../util/formatters';
import { Icons } from '../../../theme/icons';
import { Divider } from '../../shared/Divider';

export const RecentTransactions = () => {
  const statusConfig = {
    success: { bg: COLORS.green50, text: COLORS.green700 },
    failed: { bg: COLORS.red50, text: COLORS.red600 },
    pending: { bg: COLORS.yellow50, text: COLORS.amber500 },
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Typography textstyle={AppTextStyle.heading7} style={styles.fill}>
          {'Recent Transactions'}
        </Typography>
        <Typography
          textstyle={AppTextStyle.bodyMediumMedium}
          color={COLORS.indigo500}
        >
          {'See All'}
        </Typography>
        <Icons.ChevronRight />
      </View>
      <FlatList
        scrollEnabled={false}
        data={mockTransactions.slice(0, 3)}
        renderItem={function ({ item }) {
          const isCredit = item.type === 'credit';
          const status = statusConfig[item.status];
          return (
            <View style={styles.itemContainer}>
              <View
                style={[
                  styles.icon,
                  { backgroundColor: isCredit ? COLORS.green50 : COLORS.red50 },
                ]}
              >
                {isCredit ? <Icons.Credit /> : <Icons.Debit />}
              </View>
              <View style={styles.content}>
                <Typography textstyle={AppTextStyle.bodyMediumMedium}>
                  {item.description}
                </Typography>
                <Typography
                  textstyle={AppTextStyle.bodySmall}
                  color={COLORS.grey500}
                >
                  {formatDate(item.date)}
                </Typography>
              </View>
              <View style={styles.gap4}>
                <Typography
                  textstyle={AppTextStyle.bodyMedium}
                  color={isCredit ? COLORS.green700 : COLORS.grey900}
                >{`${isCredit ? '+' : '-'}₦${formatNumber(
                  item.amount,
                )}`}</Typography>
                <Typography
                  textstyle={AppTextStyle.bodyTiny}
                  color={status.text}
                  style={[styles.status, { backgroundColor: status.bg }]}
                >
                  {item.status}
                </Typography>
              </View>
            </View>
          );
        }}
        style={styles.listContainer}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};

const ItemSeparator = () => <Divider margin={12} />;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
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
  fill: {
    flex: 1,
  },
  status: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 20,
  },
  itemContainer: {
    paddingVertical: 6,
    gap: 12,
    alignItems: 'center',
    flexDirection: 'row',
  },
  gap4: {
    gap: 4,
    alignItems: 'flex-end',
  },
  icon: {
    padding: 10,
    borderRadius: 20,
  },
  content: {
    flex: 1,
    gap: 4,
  },
});
