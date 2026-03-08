import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { CONSTANTS } from '../../constants';
import { mockProducts } from '../../data';
import { COLORS } from '../../theme/colors';
import { Spacer } from '../shared/Spacer';
import { Typography, AppTextStyle } from '../shared/Typography';
import { Header } from './Header';
import { ProductCard } from './ProductCard';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ClassApp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.title}>
        <Typography textstyle={AppTextStyle.heading6}>
          {'Featured Products'}
        </Typography>
        <Typography textstyle={AppTextStyle.bodySmall} color={COLORS.grey500}>
          {'Discover our latest tech collection'}
        </Typography>
      </View>
      <FlatList
        data={mockProducts}
        renderItem={({ item }) => <ProductCard product={item} />}
        style={styles.products}
        ItemSeparatorComponent={ItemSeparator}
        ListFooterComponent={() => Spacer({ height: 50 })}
      />
    </SafeAreaView>
  );
};

const ItemSeparator = () => <Spacer height={34} />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textColor: {
    color: 'red',
  },
  title: {
    paddingHorizontal: CONSTANTS.screenPadding,
    paddingTop: 24,
    paddingBottom: 16,
    gap: 4,
  },
  products: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
});
