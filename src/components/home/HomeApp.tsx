import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { WelcomeHeader } from './WelcomeHeader';
import { TotalBalanceCard } from './TotalBalanceCard';
import { COLORS } from '../../theme/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { QuickActions } from './QuickActions';
import { AccountCarousel } from './AccountCarousel';
import { RecentTransactions } from './RecentTransactions';
import { SpendingCategory } from './SpendingCategory';

export const HomeApp = () => {
  return (
    <SafeAreaView edges={['bottom', 'left', 'right']}>
      <ScrollView
        contentContainerStyle={styles.gap}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerContainer}>
          <WelcomeHeader />
          <TotalBalanceCard />
        </View>
        <QuickActions />
        <AccountCarousel />
        <RecentTransactions />
        <SpendingCategory />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLORS.slate800,
    paddingTop: 24,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    paddingBottom: 128,
    gap: 32,
  },
  gap: {
    gap: 14,
  },
});
