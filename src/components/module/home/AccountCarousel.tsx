import { FlatList, StyleSheet, useWindowDimensions, View } from 'react-native';
import React, { useState } from 'react';
import { AppTextStyle, Typography } from '../../shared/Typography';
import { CONSTANTS } from '../../../constants';
import { mockAccounts } from '../../../data';
import { COLORS } from '../../../theme/colors';
import { Spacer } from '../../shared/Spacer';
import LinearGradient from 'react-native-linear-gradient';
import { formatNumber, withOpacity } from '../../../util/formatters';
import { CarouselIndicator } from './CarouselIndicator';

export const AccountCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { width: screenWidth } = useWindowDimensions();
  const CARD_WIDTH = screenWidth - CONSTANTS.screenPadding * 2;
  const SPACING = 14;

  return (
    <View style={styles.container}>
      <Typography
        textstyle={AppTextStyle.heading7}
        style={{ paddingHorizontal: CONSTANTS.screenPadding }}
      >
        {'My Accounts'}
      </Typography>
      <FlatList
        data={mockAccounts}
        keyExtractor={item => item.id}
        onMomentumScrollEnd={({ nativeEvent }) => {
          const offset = nativeEvent.contentOffset.x;
          const newIndex = Math.round(offset / screenWidth);
          setActiveIndex(newIndex);
        }}
        renderItem={({ item }) => (
          <LinearGradient
            colors={['#374151', '#1F2937']}
            start={{ x: 0.8, y: 0 }}
            end={{ x: 0.2, y: 1 }}
            style={[styles.accountCard, { width: CARD_WIDTH }]}
          >
            <View style={styles.typeRow}>
              <Typography
                textstyle={AppTextStyle.bodySmall}
                color={withOpacity(COLORS.white, 0.8)}
                style={styles.capitalize}
              >{`${item.type} account`}</Typography>
              {item.isDefault && (
                <Typography
                  textstyle={AppTextStyle.bodyTiny}
                  color={COLORS.white}
                  style={styles.default}
                >
                  {'Default'}
                </Typography>
              )}
            </View>
            <Spacer height={8} />
            <Typography
              textstyle={AppTextStyle.bodySmall}
              color={withOpacity(COLORS.white, 0.9)}
            >
              {item.accountNumber}
            </Typography>
            <Spacer height={20} />
            <Typography
              textstyle={AppTextStyle.bodyTiny}
              color={withOpacity(COLORS.white, 0.7)}
            >
              {'Balance'}
            </Typography>
            <Spacer height={4} />
            <Typography
              textstyle={AppTextStyle.heading5}
              color={COLORS.white}
            >{`₦${formatNumber(item.balance)}`}</Typography>
            <View style={styles.circle} />
          </LinearGradient>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + SPACING}
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: SPACING }}
        ItemSeparatorComponent={() => Spacer({ width: SPACING })}
      />
      <CarouselIndicator
        lenght={mockAccounts.length}
        activeIndex={activeIndex}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    gap: 16,
  },
  accountCard: {
    backgroundColor: COLORS.slate700,
    padding: 20,
    borderRadius: 16,
    overflow: 'hidden',
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
  capitalize: { textTransform: 'capitalize' },
  typeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  default: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 24,
    backgroundColor: withOpacity(COLORS.white, 0.2),
  },
  circle: {
    height: 96,
    width: 96,
    backgroundColor: withOpacity(COLORS.white, 0.1),
    borderRadius: 50,
    position: 'absolute',
    top: -48,
    right: -48,
  },
});
